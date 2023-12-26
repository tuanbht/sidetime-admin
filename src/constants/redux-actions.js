const SUCCESS_SUFFIX = '_SUCCESS';
const FAILURE_SUFFIX = '_FAIL';

export const ADD_LOADING_API = 'ADD_LOADING_API';
export const CLEAR_LOADED_API = 'CLEAR_LOADED_API';
export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';
export const SIGN_IN = 'SIGN_IN';
export const GET_CURRENT_ADMIN = 'GET_CURRENT_ADMIN';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const ActionSuccessType = (action) => action.concat(SUCCESS_SUFFIX);

export const ActionFailureType = (action) => action.concat(FAILURE_SUFFIX);
