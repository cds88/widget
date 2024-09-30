import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import WidgetLabel from './WidgetLabel';

describe('WidgetLabel', () => {
  test('renders children correctly', () => {
    const { getByText } = render(<WidgetLabel>Test Label </WidgetLabel>);
    expect(getByText('Test Label')).toBeInTheDocument();
  });

  test('applies additional props', () => {
    const { container } = render(
      <WidgetLabel data-testid="custom-label" className="custom-class">
        Custom Props
      </WidgetLabel>,
    );

    const labelWrapper = container.firstChild;
    expect(labelWrapper).toHaveAttribute('data-testid', 'custom-label');
    expect(labelWrapper).toHaveClass('custom-class');
  });
});
