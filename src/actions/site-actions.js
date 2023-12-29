import { createAction } from '@reduxjs/toolkit';

import { SELECT_SITE } from '../constants/redux-actions';

const selectSite = (site) => createAction(SELECT_SITE)(site);

const siteActions = {
  selectSite,
};

export default siteActions;
