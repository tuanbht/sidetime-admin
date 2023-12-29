import { createAction, createReducer } from '@reduxjs/toolkit';
import get from 'lodash/get';

import { ActionSuccessType, GET_CURRENT_ADMIN } from '../constants/redux-actions';

const initState = [];

const siteReducer = createReducer(initState, (builder) => {
  builder.addCase(createAction(ActionSuccessType(GET_CURRENT_ADMIN)), (_, action) =>
    get(action.payload.data, 'sites', []),
  );
});

export default siteReducer;
