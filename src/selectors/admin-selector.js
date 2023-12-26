import { createSelector } from '@reduxjs/toolkit';
import get from 'lodash/get';

export const isAuthenticatedAminSelector = createSelector(
  (state) => get(state, 'admin', {}),
  (admin) => !!admin.id,
);
