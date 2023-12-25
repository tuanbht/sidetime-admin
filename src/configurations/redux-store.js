import axiosMiddleware from 'redux-axios-middleware';
import get from 'lodash/get';
import merge from 'lodash/merge';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import noop from 'lodash/noop';

import AxiosClient from './api-client';

const persistConfig = {
  key: import.meta.env.VITE_WEBAPP_NAME,
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, noop);

const axiosMiddlewareConfig = {
  interceptors: {
    request: [
      ({ getState, dispatch }, request) => {
        const token = get(getState(), 'auth.token');

        if (token) {
          merge(request, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }

        const selectedLanguage = get(getState(), 'lang');

        selectedLanguage &&
          merge(request, {
            headers: {
              Lang: selectedLanguage,
            },
          });

        // dispatch(loadingApiActions.addLoadingApi());
        dispatch(noop);
        return request;
      },
    ],
    response: [
      {
        success: ({ dispatch }, response) => {
          // dispatch(loadingApiActions.clearLoadedApi());
          dispatch(noop);
          return Promise.resolve(response);
        },
        error: ({ dispatch, getState }, response) => {
          const token = get(getState(), 'auth.token');
          // Sign out if token is expired
          if (get(response, 'response.status') === 401 && token) {
            // dispatch(authActions.clearToken());
          }

          // dispatch(loadingApiActions.clearLoadedApi());
          dispatch(noop);
          return Promise.reject(response);
        },
      },
    ],
  },
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(axiosMiddleware(AxiosClient, axiosMiddlewareConfig));

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: import.meta.env.DEV,
});

const persistor = persistStore(store);

export { store, persistor, middleware };
