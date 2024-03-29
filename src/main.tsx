import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { MantineProvider , createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

const queryClient = new QueryClient();

const theme = createTheme({
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} withGlobalClasses>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>,
)

