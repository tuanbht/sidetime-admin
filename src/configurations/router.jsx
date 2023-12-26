import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  FORGOT_PASSWORD_PATH,
  NOT_FOUND_PATH,
  RESET_PASSWORD_PATH,
  ROOT_PATH,
  SIGN_IN_PATH,
  SIGN_OUT_PATH,
  UNMATCHED_ROUTE_PATH,
} from '../constants/route-paths';
import SignIn from '../containers/sign-in';
import LoadingAnimation from '../components/loading-animation';
import NotFoundPage from '../containers/not-found';
import ForgotPassword from '../containers/forgot-password';
import Home from '../containers/home';
import ResetPassword from '../containers/reset-password';
import { useGetCurrentAdminQuery } from '../hooks/admin-hooks';
import { ActionSuccessType, GET_CURRENT_ADMIN } from '../constants/redux-actions';
import adminActions from '../actions/admin-actions';
import ContainerLayout from '../components/container-layout';
import { CURRENT_ADMIN } from '../constants/query-keys';

const Router = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { data } = useGetCurrentAdminQuery();

  const signOutMutation = useMutation({
    mutationFn: () => dispatch(adminActions.signOut()),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [CURRENT_ADMIN] }),
  });

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          id: 'root',
          path: ROOT_PATH,
          loader() {
            if (data && data.type !== ActionSuccessType(GET_CURRENT_ADMIN)) {
              return redirect(SIGN_IN_PATH);
            }

            return null;
          },
          children: [
            {
              index: true,
              element: <ContainerLayout container={Home} />,
            },
          ],
        },
        {
          path: SIGN_IN_PATH,
          exact: true,
          element: <ContainerLayout container={SignIn} />,
          title: 'Sign in',
          loader() {
            if (data && data.type === ActionSuccessType(GET_CURRENT_ADMIN)) {
              return redirect(ROOT_PATH);
            }

            return null;
          },
        },
        {
          path: FORGOT_PASSWORD_PATH,
          exact: true,
          element: <ContainerLayout container={ForgotPassword} />,
          title: 'Forgot Password',
          loader() {
            if (data && data.type === ActionSuccessType(GET_CURRENT_ADMIN)) {
              return redirect(ROOT_PATH);
            }

            return null;
          },
        },
        {
          path: RESET_PASSWORD_PATH,
          exact: true,
          element: <ContainerLayout container={ResetPassword} />,
          title: 'Reset Password',
          loader() {
            if (data && data.type === ActionSuccessType(GET_CURRENT_ADMIN)) {
              return redirect(ROOT_PATH);
            }

            return null;
          },
        },
        {
          path: SIGN_OUT_PATH,
          loader() {
            signOutMutation.mutate();
            return redirect(SIGN_IN_PATH);
          },
        },
        {
          path: NOT_FOUND_PATH,
          element: <ContainerLayout container={NotFoundPage} />,
        },
        {
          path: UNMATCHED_ROUTE_PATH,
          loader() {
            return redirect(NOT_FOUND_PATH);
          },
        },
      ]),
    [data, signOutMutation],
  );

  return <RouterProvider router={router} fallbackElement={<LoadingAnimation />} />;
};

export default Router;
