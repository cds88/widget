import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from '../App';
import { appTheme } from '../../styles/material-theme';


jest.mock('../../components/WidgetOrganisms/WidgetTHR08', () => () => <div>Mocked WidgetTHR08</div>);

const queryClient = new QueryClient();

describe('App Component Snapshot Test', () => {
  test('matches the snapshot', () => {
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
