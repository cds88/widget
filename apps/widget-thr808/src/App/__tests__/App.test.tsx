import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import {
  SPINNER_DATA_TESTIDS,
  WidgetErrorFallback,
  WidgetLoadingFallback,
} from '@widget/molecules';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ThemesProvider } from '../../styles/ThemesProvider';
import App from '../App';
import { AppWrapper } from '../styled';

jest.mock('../App');

const MockedApp = App as jest.Mock;

const queryClient = new QueryClient();

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('displays loading fallback initially', async () => {
    MockedApp.mockImplementation(() => {
      throw new Promise(() => {});
    });

    jest.mock('@tanstack/react-query', () => ({
      ...jest.requireActual('@tanstack/react-query'),
      useSuspenseQuery: jest.fn().mockImplementation(() => {
        throw new Promise(() => {});
      }),
    }));

    render(
      <ThemesProvider>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <AppWrapper>
            <Suspense fallback={<WidgetLoadingFallback />}>
              <ErrorBoundary FallbackComponent={WidgetErrorFallback}>
                <CssBaseline />
                <App />
              </ErrorBoundary>
            </Suspense>
          </AppWrapper>
        </QueryClientProvider>
      </ThemesProvider>,
    );

    await waitFor(() =>
      expect(
        screen.getByTestId(SPINNER_DATA_TESTIDS.SPINNER_CIRCULAR_PROGRESS),
      ).toBeInTheDocument(),
    );
  });

  test('displays error fallback on error', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    MockedApp.mockImplementation(() => {
      throw new Error('Test error');
    });

    render(
      <QueryClientProvider client={queryClient}>
        <ThemesProvider>
          <CssBaseline />
          <Suspense fallback={<WidgetLoadingFallback />}>
            <ErrorBoundary FallbackComponent={WidgetErrorFallback}>
              <App />
            </ErrorBoundary>
          </Suspense>
        </ThemesProvider>
      </QueryClientProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument(),
    );
    (console.error as jest.Mock).mockRestore();
  });

  test('renders WidgetTHR08 after loading', async () => {
    MockedApp.mockImplementation(() => <div>Widget THR08 Loaded</div>);

    render(
      <QueryClientProvider client={queryClient}>
        <ThemesProvider>
          <CssBaseline />
          <App />
        </ThemesProvider>
      </QueryClientProvider>,
    );

    await waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(),
    );

    expect(screen.getByText('Widget THR08 Loaded')).toBeInTheDocument();
  });
});
