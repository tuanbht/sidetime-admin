import { createAction } from '@reduxjs/toolkit';

import { API_GET_CURRENT_ADMIN, API_SIGN_IN } from '../constants/api-paths';
import { CLEAR_AUTH_TOKEN, GET_CURRENT_ADMIN, SIGN_IN } from '../constants/redux-actions';

import { get, post } from './axios-request-actions';

const signIn = (data) => post(SIGN_IN, API_SIGN_IN, data);
const getCurrentAdmin = () => get(GET_CURRENT_ADMIN, API_GET_CURRENT_ADMIN);
const signOut = createAction(CLEAR_AUTH_TOKEN);

const adminActions = {
  signIn,
  getCurrentAdmin,
  signOut,
};

export default adminActions;
