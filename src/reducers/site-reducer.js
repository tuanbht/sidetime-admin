import { createAction, createReducer } from '@reduxjs/toolkit';
import find from 'lodash/find';
import first from 'lodash/first';
import get from 'lodash/get';

import { ActionSuccessType, GET_CURRENT_ADMIN, SELECT_SITE } from '../constants/redux-actions';

const initState = {};

const sitesReducer = createReducer(initState, (builder) => {
  builder
    .addCase(createAction(ActionSuccessType(GET_CURRENT_ADMIN)), (state, action) => {
      const sites = get(action.payload.data, 'sites', []);

      return find(sites, state) ? state : first(sites);
    })
    .addCase(createAction(SELECT_SITE), (_, action) => action.payload);
});

export default sitesReducer;
