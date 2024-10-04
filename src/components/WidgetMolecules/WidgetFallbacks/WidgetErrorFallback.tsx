import React from 'react';

type WidgetErrorProps = {
  error: Error;
  resetErrorBoundary: () => void;
  children?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error;
};

export class WidgetErrorFallback extends React.Component<
  WidgetErrorProps,
  ErrorBoundaryState
> {
  constructor(props: WidgetErrorProps) {
    super(props);
    this.state = { hasError: false, error: props.error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught', error, errorInfo);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  static getDerivedStateFromProps(
    nextProps: WidgetErrorProps,
    prevState: ErrorBoundaryState,
  ) {
    if (nextProps.error !== prevState.error) {
      return {
        error: nextProps.error,
      };
    }
    return null;
  }

  render() {
    const errorMessage =
      this.state.error?.message || 'An unknown error occurred';

    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{errorMessage}</pre>
        <button onClick={this.props.resetErrorBoundary}>Reset</button>
      </div>
    );
  }
}
