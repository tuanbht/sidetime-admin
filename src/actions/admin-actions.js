import { createAction } from '@reduxjs/toolkit';

import { API_GET_CURRENT_ADMIN, API_PASSWORD, API_SIGN_IN } from '../constants/api-paths';
import { CLEAR_AUTH_TOKEN, GET_CURRENT_ADMIN, RESET_PASSWORD, SIGN_IN } from '../constants/redux-actions';

import { get, post, put } from './axios-request-actions';

const signIn = (data) => post(SIGN_IN, API_SIGN_IN, data);
const getCurrentAdmin = () => get(GET_CURRENT_ADMIN, API_GET_CURRENT_ADMIN);
const signOut = createAction(CLEAR_AUTH_TOKEN);

const resetPassword = (resetPasswordToken, password, passwordConfirmation) =>
  put(RESET_PASSWORD, API_PASSWORD, { admin: { password, passwordConfirmation, resetPasswordToken } });

const adminActions = {
  signIn,
  signOut,
  getCurrentAdmin,
  resetPassword,
};

export default adminActions;
