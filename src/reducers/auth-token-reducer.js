import { createAction, createReducer } from '@reduxjs/toolkit';

import { CLEAR_AUTH_TOKEN } from '../constants/redux-actions';

const initState = '';

const authTokenReducer = createReducer(initState, (builder) => {
  builder.addCase(createAction(CLEAR_AUTH_TOKEN), () => initState);
});

export default authTokenReducer;
