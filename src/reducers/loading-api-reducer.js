import { createAction, createReducer } from '@reduxjs/toolkit';

import { ADD_LOADING_API, CLEAR_LOADED_API } from '../constants/redux-actions';

const initState = [];

const loadingApiReducer = createReducer(initState, (builder) => {
  builder
    .addCase(createAction(ADD_LOADING_API), (prev) => {
      prev.push(true);
      return prev;
    })
    .addCase(createAction(CLEAR_LOADED_API), (prev) => {
      prev.pop();
      return prev;
    });
});

export default loadingApiReducer;
