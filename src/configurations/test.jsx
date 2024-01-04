import { configureStore } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Router } from 'react-router-dom';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from '../reducers';

import axiosClient from './api-client';

const queryClient = new QueryClient({
  logger: {
    error: () => {},
  },
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 0,
    },
    mutations: {
      cacheTime: 0,
    },
  },
});

export const testStore = (initialState = {}) =>
  configureStore({
    preloadedState: initialState,
    reducer: reducer,
    middleware: [axiosMiddleware(axiosClient)],
  });

export const mockAxios = new MockAdapter(axiosClient);

export const renderApplication = (element, store = testStore(), entriesPath = '') =>
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[entriesPath]}>{element}</MemoryRouter>
      </QueryClientProvider>
    </Provider>,
  );

export const renderWithHistory = (element, customHistory, store = testStore()) =>
  renderApplication(<Router history={customHistory}>{element}</Router>, store);
