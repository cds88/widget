import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WidgetErrorFallback } from '../WidgetErrorFallback';

describe('WidgetErrorFallback Snapshot Tests', () => {
  const mockError = new Error('Test error');
  const mockReset = jest.fn();

  test('renders correctly with an error', () => {
    const { asFragment } = render(
      <WidgetErrorFallback error={mockError} resetErrorBoundary={mockReset} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with a custom error message', () => {
    const customError = new Error('Custom error message');
    const { asFragment, getByText } = render(
      <WidgetErrorFallback
        error={customError}
        resetErrorBoundary={mockReset}
      />,
    );

    expect(getByText('Custom error message')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('calls resetErrorBoundary on button click', () => {
    const { getByText } = render(
      <WidgetErrorFallback error={mockError} resetErrorBoundary={mockReset} />,
    );

    const resetButton = getByText('Reset');
    fireEvent.click(resetButton);

    expect(mockReset).toHaveBeenCalled();
  });
});
