import {
  CssBaseline
} from '@mui/material';

import ReactDOM from 'react-dom/client';
import App from './App/App';
import { ThemesProvider } from './styles/ThemesProvider';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <ThemesProvider>
    <CssBaseline />
    <App />
  </ThemesProvider>,
);
