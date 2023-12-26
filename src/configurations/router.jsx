import React from 'react';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';

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
import ContainerLayout from '../components/container-layout';
import NotFoundPage from '../containers/not-found';
import ForgotPassword from '../containers/forgot-password';
import Home from '../containers/home';
import ResetPassword from '../containers/reset-password';

const router = createBrowserRouter([
  {
    id: 'root',
    path: ROOT_PATH,
    loader() {
      return { user: 1 };
    },
    element: <ContainerLayout container={Home} />,
    children: [],
  },
  {
    path: SIGN_IN_PATH,
    exact: true,
    element: <ContainerLayout container={SignIn} />,
    title: 'Sign in',
  },
  {
    path: FORGOT_PASSWORD_PATH,
    exact: true,
    element: <ContainerLayout container={ForgotPassword} />,
    title: 'Forgot Password',
  },
  {
    path: RESET_PASSWORD_PATH,
    exact: true,
    element: <ContainerLayout container={ResetPassword} />,
    title: 'Reset Password',
  },
  {
    path: SIGN_OUT_PATH,
    loader() {
      return redirect(ROOT_PATH);
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
]);

const Router = () => <RouterProvider router={router} fallbackElement={<LoadingAnimation />} />;

export default Router;
