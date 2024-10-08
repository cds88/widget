import { ThemeProvider as MaterialUIThemeProvider } from '@mui/material';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { useSuspenseQuery } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AVAILABLE_WIDGETS } from '../../../../state/const';
import { materialUiTheme } from '../../../../styles/materialTheme';
import WidgetTHR08 from '../WidgetTHR08';
import { fetchData } from '../actions';
import { styledComponentsTheme } from '../../../../styles/styledComponentsTheme';

jest.mock('../actions', () => ({
  fetchData: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useSuspenseQuery: jest.fn(),
}));

describe('WidgetTHR08', () => {
  const mockState = {
    brightness: 60,
    timeLeft: 90,
    flashing: false,
    nightVision: false,
    duskTillDawn: false,
  };

  beforeEach(() => {
    (useSuspenseQuery as jest.Mock).mockImplementation(() => ({
      data: mockState,
    }));

    (fetchData as jest.Mock).mockResolvedValue(mockState);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing and displays initial values', () => {
    render(
      <MaterialUIThemeProvider theme={materialUiTheme}>
        <StyledComponentsThemeProvider theme={styledComponentsTheme}>
          <WidgetTHR08 />
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>,
    );

    expect(screen.getByText(AVAILABLE_WIDGETS.WIDGET_TH08)).toBeInTheDocument();

    expect(screen.getByText(/60%/)).toBeInTheDocument();

    expect(screen.getByText('90h')).toBeInTheDocument();
  });

  test('updates brightness when vertical percentage control is changed', () => {
    render(
      <MaterialUIThemeProvider theme={materialUiTheme}>
        <StyledComponentsThemeProvider theme={styledComponentsTheme}>
          <WidgetTHR08 />
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>,
    );

    const increaseButton = screen.getByRole('button', {
      name: /increase brightness/i,
    });
    fireEvent.click(increaseButton);

    expect(screen.getByText(/80%/)).toBeInTheDocument();
  });

  test('calls onSetButtonPanel when button panels change', () => {
    render(
      <MaterialUIThemeProvider theme={materialUiTheme}>
        <StyledComponentsThemeProvider theme={styledComponentsTheme}>
          <WidgetTHR08 />
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>,
    );

    const flashingButton = screen.getByRole('button', {
      name: /decrease brightness/i,
    });
    fireEvent.click(flashingButton);

    expect(screen.getByText(/flashing/i)).toBeInTheDocument();
  });
});
