import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'index.css';
import App from 'components/App/App';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);


root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
