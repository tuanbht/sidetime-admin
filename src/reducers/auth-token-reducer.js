import { createAction, createReducer } from '@reduxjs/toolkit';
import get from 'lodash/get';

import { ActionSuccessType, CLEAR_AUTH_TOKEN, SIGN_IN } from '../constants/redux-actions';

const initState = '';

const authTokenReducer = createReducer(initState, (builder) => {
  builder
    .addCase(createAction(CLEAR_AUTH_TOKEN), () => initState)
    .addCase(createAction(ActionSuccessType(SIGN_IN)), (state, action) =>
      get(action.payload, ['data', 'token'], state),
    );
});

export default authTokenReducer;
