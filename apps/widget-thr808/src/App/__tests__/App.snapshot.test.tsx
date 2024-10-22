import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import {
  ThemeProvider as MaterialUIThemeProvider,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import App from '../App';
import { materialUiTheme } from '../../styles/materialTheme';
import { styledComponentsTheme } from '../../styles/styledComponentsTheme';

jest.mock('@widget/organisms/WidgetTHR08', () => () => (
  <div>Mocked WidgetTHR08</div>
));

const queryClient = new QueryClient();

describe('App Component Snapshot Test', () => {
  test('matches the snapshot', () => {
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <MaterialUIThemeProvider theme={materialUiTheme}>
          <StyledComponentsThemeProvider theme={styledComponentsTheme}>
            <CssBaseline />
            <App />
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </QueryClientProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
