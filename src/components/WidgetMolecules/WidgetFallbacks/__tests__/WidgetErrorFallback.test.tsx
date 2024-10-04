import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { WidgetErrorFallback } from '../WidgetErrorFallback';

describe('WidgetErrorFallback', () => {
  const mockResetErrorBoundary = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders error message when passed an error', () => {
    const error = new Error('Test error message');

    const { getByRole, getByText } = render(
      <WidgetErrorFallback
        error={error}
        resetErrorBoundary={mockResetErrorBoundary}
      />,
    );
 
    expect(getByRole('alert')).toBeInTheDocument();
    expect(getByText('Something went wrong:')).toBeInTheDocument();
    expect(getByText('Test error message')).toBeInTheDocument();
  });

  test('logs error when componentDidCatch is called', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const ErrorThrowingComponent = () => {
      throw new Error('Simulated error');
    };

    const { unmount } = render(
      <ErrorBoundary FallbackComponent={WidgetErrorFallback}>
        <ErrorThrowingComponent />{' '}
      </ErrorBoundary>,
    );

    unmount();

    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });

  test('sets initial state in constructor', () => {
    const error = new Error('Constructor test error');

    const { rerender } = render(
      <WidgetErrorFallback
        error={error}
        resetErrorBoundary={mockResetErrorBoundary}
      />,
    );

    expect(screen.getByText('Constructor test error')).toBeInTheDocument();

    rerender(
      <WidgetErrorFallback
        error={new Error('New error')}
        resetErrorBoundary={mockResetErrorBoundary}
      />,
    );

    expect(screen.getByText('New error')).toBeInTheDocument();
  });

  test('renders updated error message when state changes', () => {
    const initialError = new Error('Initial error');
    const newError = new Error('Updated error');

    const { rerender } = render(
      <WidgetErrorFallback
        error={initialError}
        resetErrorBoundary={mockResetErrorBoundary}
      />,
    );

    expect(screen.getByText('Initial error')).toBeInTheDocument();

    rerender(
      <WidgetErrorFallback
        error={newError}
        resetErrorBoundary={mockResetErrorBoundary}
      />,
    );

    expect(screen.getByText('Updated error')).toBeInTheDocument();
  });
  test('does not update state when error prop does not change', () => {
    const error = new Error('Initial error');

    const { rerender } = render(
      <WidgetErrorFallback
        error={error}
        resetErrorBoundary={mockResetErrorBoundary}
      />,
    );

    rerender(
      <WidgetErrorFallback
        error={error}
        resetErrorBoundary={mockResetErrorBoundary}
      />,
    );

    expect(screen.getByText('Initial error')).toBeInTheDocument();
  });

  test('calls resetErrorBoundary when reset button is clicked', () => {
    const error = new Error('Test error');
    const { getByRole } = render(
      <WidgetErrorFallback
        error={error}
        resetErrorBoundary={mockResetErrorBoundary}
      />,
    );

    const resetButton = getByRole('button', { name: /reset/i });

    resetButton.click();

    expect(mockResetErrorBoundary).toHaveBeenCalled();
  });

  test('handles no error passed initially (edge case)', () => {
    const { rerender } = render(
      <WidgetErrorFallback
        error={new Error('Initial error')}
        resetErrorBoundary={mockResetErrorBoundary}
      />,
    );

    expect(screen.getByText('Initial error')).toBeInTheDocument();

    rerender(
      <WidgetErrorFallback
        error={undefined as any}
        resetErrorBoundary={mockResetErrorBoundary}
      />,
    );
    expect(screen.getByText('Something went wrong:')).toBeInTheDocument();
  });
});
