import {
  CssBaseline,
  ThemeProvider as MaterialUIThemeProvider,
} from '@mui/material';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import WidgetTHR08 from '../../components/WidgetOrganisms/WidgetTHR08';
import { materialUiTheme } from '../../styles/materialTheme';
import App from '../App';
import { SPINNER_DATA_TESTIDS } from '../../components/WidgetMolecules/WidgetFallbacks/const.test';
import { styledComponentsTheme } from '../../styles/styledComponentsTheme';

jest.mock('../../components/WidgetOrganisms/WidgetTHR08');

const MockedWidgetTHR08 = WidgetTHR08 as jest.Mock;

const queryClient = new QueryClient();

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('displays loading fallback initially', async () => {
    MockedWidgetTHR08.mockImplementation(() => {
      throw new Promise(() => {});
    });

    jest.mock('@tanstack/react-query', () => ({
      ...jest.requireActual('@tanstack/react-query'),
      useSuspenseQuery: jest.fn().mockImplementation(() => {
        throw new Promise(() => {});
      }),
    }));

    render(
      <QueryClientProvider client={queryClient}>
        <MaterialUIThemeProvider theme={materialUiTheme}>
          <StyledComponentsThemeProvider theme={styledComponentsTheme}>
            <CssBaseline />
            <App />
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </QueryClientProvider>,
    );

    await waitFor(() =>
      expect(
        screen.getByTestId(SPINNER_DATA_TESTIDS.SPINNER_CIRCULAR_PROGRESS),
      ).toBeInTheDocument(),
    );
  });

  test('displays error fallback on error', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    MockedWidgetTHR08.mockImplementation(() => {
      throw new Error('Test error');
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MaterialUIThemeProvider theme={materialUiTheme}>
          <StyledComponentsThemeProvider theme={styledComponentsTheme}>
            <CssBaseline />
            <App />
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </QueryClientProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument(),
    );
    (console.error as jest.Mock).mockRestore();
  });

  test('renders WidgetTHR08 after loading', async () => {
    MockedWidgetTHR08.mockImplementation(() => <div>Widget THR08 Loaded</div>);

    render(
      <QueryClientProvider client={queryClient}>
        <MaterialUIThemeProvider theme={materialUiTheme}>
          <StyledComponentsThemeProvider theme={styledComponentsTheme}>
            <CssBaseline />
            <App />
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </QueryClientProvider>,
    );

    await waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(),
    );

    expect(screen.getByText('Widget THR08 Loaded')).toBeInTheDocument();
  });
});
