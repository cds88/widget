import { CssBaseline } from '@mui/material';

import ReactDOM from 'react-dom/client';
import App from './App/App';
import { ThemesProvider } from './styles/ThemesProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { WidgetErrorFallback, WidgetLoadingFallback } from '@widget/molecules';
import { AppWrapper } from './App/styled';

const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <ThemesProvider>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <Suspense fallback={<WidgetLoadingFallback />}>
          <ErrorBoundary FallbackComponent={WidgetErrorFallback}>
            <App />
          </ErrorBoundary>
        </Suspense>
      </AppWrapper>
    </QueryClientProvider>
  </ThemesProvider>,
);
