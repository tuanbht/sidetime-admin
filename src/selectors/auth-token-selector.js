import { createSelector } from '@reduxjs/toolkit';
import get from 'lodash/get';

export const authTokenSelector = createSelector(
  (state) => get(state, 'authToken', ''),
  (authToken) => authToken,
);
