import { createSelector } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';
import get from 'lodash/get';

const getSitesState = (state) => get(state, 'sites', []);

export const sitesSelector = createSelector(getSitesState, (sites) => (isEmpty(sites) ? [] : sites));
