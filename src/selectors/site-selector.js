import { createSelector } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';
import get from 'lodash/get';

const getSiteState = (state) => get(state, 'site', {});

export const siteSelector = createSelector(getSiteState, (site) => (isEmpty(site) ? {} : site));
