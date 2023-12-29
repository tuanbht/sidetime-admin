import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import adminActions from '../actions/admin-actions';
import ContainerLayout from '../components/container-layout';
import LoadingAnimation from '../components/loading-animation';
import {
  FORGOT_PASSWORD_PATH,
  NOT_FOUND_PATH,
  RESET_PASSWORD_PATH,
  ROOT_PATH,
  SIGN_IN_PATH,
  SIGN_OUT_PATH,
  UNMATCHED_ROUTE_PATH,
} from '../constants/route-paths';
import ForgotPassword from '../containers/forgot-password';
import Home from '../containers/home';
import NotFoundPage from '../containers/not-found';
import ResetPassword from '../containers/reset-password';
import SignIn from '../containers/sign-in';
import { useGetCurrentAdminQuery } from '../hooks/admin-hooks';
import { isAuthenticatedAdminSelector } from '../selectors/admin-selector';

const Router = () => {
  const dispatch = useDispatch();

  const { isLoading } = useGetCurrentAdminQuery();

  const isAuthenticatedAmin = useSelector(isAuthenticatedAdminSelector);

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          id: 'root',
          path: ROOT_PATH,
          loader() {
            if (!isAuthenticatedAmin) {
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
          element: <SignIn />,
          title: 'Sign in',
          loader() {
            if (isAuthenticatedAmin) {
              return redirect(ROOT_PATH);
            }

            return null;
          },
        },
        {
          path: FORGOT_PASSWORD_PATH,
          exact: true,
          element: <ForgotPassword />,
          title: 'Forgot Password',
          loader() {
            if (isAuthenticatedAmin) {
              return redirect(ROOT_PATH);
            }

            return null;
          },
        },
        {
          path: RESET_PASSWORD_PATH,
          exact: true,
          element: <ResetPassword />,
          title: 'Reset Password',
          loader() {
            if (isAuthenticatedAmin) {
              return redirect(ROOT_PATH);
            }

            return null;
          },
        },
        {
          path: SIGN_OUT_PATH,
          loader() {
            dispatch(adminActions.signOut());
            toast.success('Sign out successfully!');

            return redirect(SIGN_IN_PATH);
          },
        },
        {
          path: NOT_FOUND_PATH,
          element: <NotFoundPage />,
        },
        {
          path: UNMATCHED_ROUTE_PATH,
          loader() {
            return redirect(NOT_FOUND_PATH);
          },
        },
      ]),
    [dispatch, isAuthenticatedAmin],
  );

  return isLoading ? <LoadingAnimation /> : <RouterProvider router={router} fallbackElement={<LoadingAnimation />} />;
};

export default Router;
