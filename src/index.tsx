import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { appTheme } from './styles/material-theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <ThemeProvider theme={appTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
);
