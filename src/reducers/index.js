import { combineReducers } from 'redux';

import adminReducer from './admin-reducer';
import authTokenReducer from './auth-token-reducer';
import loadingApiReducer from './loading-api-reducer';
import siteReducer from './site-reducer';
import sitesReducer from './sites-reducer';

export default combineReducers({
  loadingApi: loadingApiReducer,
  authToken: authTokenReducer,
  admin: adminReducer,
  sites: sitesReducer,
  site: siteReducer,
});
