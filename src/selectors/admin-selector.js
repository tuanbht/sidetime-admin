import { createSelector } from '@reduxjs/toolkit';
import get from 'lodash/get';
import omit from 'lodash/omit';

const getAdminState = (state) => get(state, 'admin', {});

export const isAuthenticatedAdminSelector = createSelector(getAdminState, (admin) => !!admin.id);

export const adminSelector = createSelector(getAdminState, (admin) => omit(admin));
