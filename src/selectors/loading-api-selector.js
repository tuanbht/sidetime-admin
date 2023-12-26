import { createSelector } from '@reduxjs/toolkit';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

export const isLoadingApiSelector = createSelector(
  (state) => get(state, 'loadingApi', []),
  (loadingApi) => !isEmpty(loadingApi),
);
