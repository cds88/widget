import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WidgetLoadingFallback } from '../WidgetLoadingFallback'; 

describe('WidgetLoadingFallback Snapshot Tests', () => {
  it('renders correctly with default props', () => {
    const { asFragment } = render(<WidgetLoadingFallback />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with custom size and color', () => {
    const { asFragment } = render(
      <WidgetLoadingFallback size={60} color="secondary" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
