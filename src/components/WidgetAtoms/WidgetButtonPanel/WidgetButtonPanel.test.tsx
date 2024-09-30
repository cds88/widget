import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WidgetButtonPanel from './WidgetButtonPanel';

describe('WidgetButtonPanel', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders correctly with given props', () => {
    render(
      <WidgetButtonPanel checked={false} onChange={mockOnChange}>
        Test Label
      </WidgetButtonPanel>,
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('calls onChange with correct value when toggled', () => {
    render(
      <WidgetButtonPanel checked={false} onChange={mockOnChange}>
        Test Label
      </WidgetButtonPanel>,
    );

    const switchElement = screen.getByRole('checkbox');

    fireEvent.click(switchElement);

    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('renders children correctly', () => {
    render(
      <WidgetButtonPanel checked={true} onChange={mockOnChange}>
        My Widget Button
      </WidgetButtonPanel>,
    );

    expect(screen.getByText('My Widget Button')).toBeInTheDocument();
  });
});
