import { useSuspenseQuery } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

 
import { WidgetTHR08State } from '../types';
import WidgetTHR08 from '../WidgetTHR08'; 
import { ThemesProvider } from '@widget/themes-providers';
import { mockTHR08Props } from './mocks';

jest.mock('@tanstack/react-query', () => ({
  useSuspenseQuery: jest.fn(),
}));

describe('WidgetTHR08 Snapshot Tests', () => {
  const mockData: WidgetTHR08State = {
    brightness: 60,
    timeLeft: 4,
    flashing: false,
    nightVision: true,
    duskTillDawn: false,
  };

  beforeEach(() => {
    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: mockData,
    });
  });

  it('renders WidgetTHR08 correctly with initial state', () => {
    const { asFragment } = render(
        <ThemesProvider>
          <WidgetTHR08   {...mockTHR08Props}/> 
          </ThemesProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with 100% brightness', () => {
    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: {
        ...mockData,
        brightness: 100,
      },
    });
    const { asFragment } = render(
          <ThemesProvider>
          <WidgetTHR08  {...mockTHR08Props}/>
          </ThemesProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with nightVision off', () => {
    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: {
        ...mockData,
        nightVision: false,
      },
    });
    const { asFragment } = render(
      <ThemesProvider>
          <WidgetTHR08 {...mockTHR08Props} />
          </ThemesProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with flashing on', () => {
    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: {
        ...mockData,
        flashing: true,
      },
    });
    const { asFragment } = render(
      <ThemesProvider>
          <WidgetTHR08 {...mockTHR08Props}/>
          </ThemesProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
