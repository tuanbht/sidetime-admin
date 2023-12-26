import { createAction } from '@reduxjs/toolkit';

import { ADD_LOADING_API, CLEAR_LOADED_API } from '../constants/redux-actions';

const addLoadingApi = createAction(ADD_LOADING_API);
const clearLoadedApi = createAction(CLEAR_LOADED_API);

const loadingApiActions = {
  addLoadingApi,
  clearLoadedApi,
};

export default loadingApiActions;
