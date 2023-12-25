import React from 'react';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';

import { NOT_FOUND_PATH, ROOT_PATH, SIGN_IN_PATH, SIGN_OUT_PATH, UNMATCHED_ROUTE_PATH } from '../constants/route-paths';
import SignIn from '../containers/sign-in';
import LoadingApiAnimation from '../components/loading-api-animation';
import ContainerLayout from '../components/container-layout';
import NotFoundPage from '../containers/not-found';

const router = createBrowserRouter([
  {
    id: 'root',
    path: ROOT_PATH,
    loader() {
      return { user: 1 };
    },
    element: <ContainerLayout container={SignIn} />,
    children: [
      {
        path: SIGN_IN_PATH,
        exact: true,
        element: <ContainerLayout container={SignIn} />,
        title: 'Sign in',
      },
    ],
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

const Router = () => <RouterProvider router={router} fallbackElement={<LoadingApiAnimation />} />;

export default Router;
