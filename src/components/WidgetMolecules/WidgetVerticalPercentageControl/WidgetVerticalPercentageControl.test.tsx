import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import WidgetVerticalPercentageControl from './WidgetVerticalPercentageControl'; 
import { WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS } from './const.test';




describe('WidgetVerticalPercentageControl', () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  test('renders without crashing', () => {
    render(<WidgetVerticalPercentageControl value={50} onChange={mockOnChange} />);
    expect(screen.getByText('50%')).toBeInTheDocument(); 
  });

  test('displays initial value correctly', () => {
    render(<WidgetVerticalPercentageControl value={75} onChange={mockOnChange} />);
    expect(screen.getByText('75%')).toBeInTheDocument(); 
  });

  test('increases value correctly', () => {
    render(<WidgetVerticalPercentageControl value={40} onChange={mockOnChange} />);

    const increaseButton = screen.getByTestId(WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_PLUS_BUTTON); 
    fireEvent.click(increaseButton); 

    expect(mockOnChange).toHaveBeenCalledWith(60); 
    expect(mockOnChange).toHaveBeenCalledTimes(1); 
  });

  test('decreases value correctly', () => {
    render(<WidgetVerticalPercentageControl value={40} onChange={mockOnChange} />);

    const decreaseButton = screen.getByTestId(WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_MINUS_BUTTON); 
    fireEvent.click(decreaseButton); 

    expect(mockOnChange).toHaveBeenCalledWith(20); 
    expect(mockOnChange).toHaveBeenCalledTimes(1); 
  });

  test('increase button is disabled at 100%', () => {
    render(<WidgetVerticalPercentageControl value={100} onChange={mockOnChange} />);

    const increaseButton = screen.getByTestId(WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_PLUS_BUTTON); 
    expect(increaseButton).toBeDisabled(); 
  });

  test('decrease button is disabled at 0%', () => {
    render(<WidgetVerticalPercentageControl value={0} onChange={mockOnChange} />);

    const decreaseButton = screen.getByTestId(WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_MINUS_BUTTON); 
    expect(decreaseButton).toBeDisabled(); 
  });

  test('does not increase value beyond 100%', () => {
    render(<WidgetVerticalPercentageControl value={100} onChange={mockOnChange} />);

    const increaseButton = screen.getByTestId(WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_PLUS_BUTTON); 
    fireEvent.click(increaseButton); 

    expect(mockOnChange).toHaveBeenCalledTimes(0); 
  });

  test('does not decrease value below 0%', () => {
    render(<WidgetVerticalPercentageControl value={0} onChange={mockOnChange} />);

    const decreaseButton = screen.getByTestId(WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_MINUS_BUTTON); 
    fireEvent.click(decreaseButton); 

    expect(mockOnChange).toHaveBeenCalledTimes(0); 
  });
});
