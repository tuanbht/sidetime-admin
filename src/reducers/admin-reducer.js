import { createAction, createReducer } from '@reduxjs/toolkit';
import omit from 'lodash/omit';
import merge from 'lodash/merge';

import {
  ActionSuccessType,
  CLEAR_AUTH_TOKEN,
  GET_CURRENT_ADMIN,
  RESET_PASSWORD,
  SIGN_IN,
} from '../constants/redux-actions';

const initState = {};

const adminReducer = createReducer(initState, (builder) => {
  builder
    .addCase(createAction(CLEAR_AUTH_TOKEN), () => initState)
    .addCase(createAction(ActionSuccessType(SIGN_IN)), (state, action) =>
      merge(state, omit(action.payload.data, ['token'])),
    )
    .addCase(createAction(ActionSuccessType(RESET_PASSWORD)), (state, action) =>
      merge(state, omit(action.payload.data, ['token'])),
    )
    .addCase(createAction(ActionSuccessType(GET_CURRENT_ADMIN)), (state, action) =>
      merge(state, omit(action.payload.data, ['sites'])),
    );
});

export default adminReducer;
