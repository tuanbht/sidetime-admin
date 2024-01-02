import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import BackJobsWrapper from './components/backjobs-wrapper';
import { persistor, store } from './configurations/redux-store';
import RouterConfiguration from './configurations/router';
import theme from './styles/mui-theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BackJobsWrapper />
          <RouterConfiguration />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default App;
