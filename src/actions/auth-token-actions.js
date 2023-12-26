import { createAction } from '@reduxjs/toolkit';

import { CLEAR_AUTH_TOKEN } from '../constants/redux-actions';

const clearToken = createAction(CLEAR_AUTH_TOKEN);

const authTokenActions = {
  clearToken,
};

export default authTokenActions;
