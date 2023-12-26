import { combineReducers } from 'redux';

import loadingApiReducer from './loading-api-reducer';
import authTokenReducer from './auth-token-reducer';
import adminReducer from './admin-reducer';

export default combineReducers({
  loadingApi: loadingApiReducer,
  authToken: authTokenReducer,
  admin: adminReducer,
});
