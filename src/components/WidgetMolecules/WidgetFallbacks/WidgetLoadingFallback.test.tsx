import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { WidgetLoadingFallback } from './WidgetLoadingFallback';

describe('WidgetLoadingFallback', () => {
  test('renders the CircularProgress component', () => {
    const { getByRole } = render(<WidgetLoadingFallback />);

    const loadingSpinner = getByRole('progressbar');
    expect(loadingSpinner).toBeInTheDocument();
  });

  test('renders the CircularProgress with correct accessibility', () => {
    const { getByRole } = render(<WidgetLoadingFallback />);

    const loadingSpinner = getByRole('progressbar');
    expect(loadingSpinner).toHaveAttribute('aria-busy', 'true');
  });
});
