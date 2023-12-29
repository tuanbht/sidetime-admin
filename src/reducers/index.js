import { combineReducers } from 'redux';

import adminReducer from './admin-reducer';
import authTokenReducer from './auth-token-reducer';
import loadingApiReducer from './loading-api-reducer';

export default combineReducers({
  loadingApi: loadingApiReducer,
  authToken: authTokenReducer,
  admin: adminReducer,
});
