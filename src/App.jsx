import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@mui/material';

import { persistor, store } from './configurations/redux-store';
import RouterConfiguration from './configurations/router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const defaultTheme = createTheme();

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RouterConfiguration />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default App;
