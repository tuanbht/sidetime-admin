import { API_SIGN_IN } from '../constants/api-paths';
import { SIGN_IN } from '../constants/redux-actions';

import { post } from './axios-request-actions';

const signIn = (data) => post(SIGN_IN, API_SIGN_IN, data);

const adminActions = {
  signIn,
};

export default adminActions;
