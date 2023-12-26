import { API_PASSWORD, API_SIGN_IN } from '../constants/api-paths';
import { RESET_PASSWORD, SIGN_IN } from '../constants/redux-actions';

import { post, put } from './axios-request-actions';

const signIn = (data) => post(SIGN_IN, API_SIGN_IN, data);

const resetPassword = (resetPasswordToken, password, passwordConfirmation) =>
  put(RESET_PASSWORD, API_PASSWORD, { admin: { password, passwordConfirmation, resetPasswordToken } });

const adminActions = {
  signIn,
  resetPassword,
};

export default adminActions;
