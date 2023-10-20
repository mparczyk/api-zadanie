import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import { GlobalStyles } from './styles/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <GlobalStyles />
    </QueryClientProvider>
  </React.StrictMode>,
);
