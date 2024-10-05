import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import WidgetVerticalPercentageControl from '../WidgetVerticalPercentageControl';
import { WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS } from '../const.test';

describe('WidgetVerticalPercentageControl', () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with an initial value of 0', () => {
    const { asFragment } = render(
      <WidgetVerticalPercentageControl value={0} onChange={mockOnChange} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders correctly with an initial value of 100', () => {
    const { asFragment } = render(
      <WidgetVerticalPercentageControl value={100} onChange={mockOnChange} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders correctly with an initial value of 50', () => {
    const { asFragment } = render(
      <WidgetVerticalPercentageControl value={50} onChange={mockOnChange} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('handles increase and decrease button clicks', () => {
    const { getByTestId, asFragment } = render(
      <WidgetVerticalPercentageControl value={40} onChange={mockOnChange} />,
    );

    const increaseButton = getByTestId(
      WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_PLUS_BUTTON,
    );
    const decreaseButton = getByTestId(
      WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_MINUS_BUTTON,
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(increaseButton);
    expect(mockOnChange).toHaveBeenCalledWith(60);

    fireEvent.click(decreaseButton);
    expect(mockOnChange).toHaveBeenCalledWith(20);

    expect(asFragment()).toMatchSnapshot();
  });
});
