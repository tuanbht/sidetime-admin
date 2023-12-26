import { combineReducers } from 'redux';

import loadingApiReducer from './loading-api-reducer';
import authTokenReducer from './auth-token-reducer';

export default combineReducers({
  loadingApi: loadingApiReducer,
  authToken: authTokenReducer,
});
