import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import widgetVerticalPercentageControlTestCases from '../../../../testCases/widgetIndicatorTestCases.json';
import WidgetIndicator from '../WidgetIndicator';
import { WIDGET_INDICATOR_DATA_TEST_IDS } from '../const.test';
 
const StripesRegexp = new RegExp(
  `^${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}\\d+$`,
);

describe('WidgetIndicator', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<WidgetIndicator percentage={50} />);
    expect(
      getByTestId(WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_WRAPPER_BOX),
    ).toBeInTheDocument();
  });

  test('renders correct number of stripes', () => {
    const { getAllByTestId } = render(<WidgetIndicator percentage={50} />);
    const stripes = getAllByTestId(StripesRegexp);
    expect(stripes.length).toBe(5);
  });

  test('does not highlight any stripes for 0%', () => {
    const { getAllByTestId } = render(<WidgetIndicator percentage={0} />);

    const stripes = getAllByTestId(StripesRegexp);
    stripes.forEach((stripe) => {
      expect(stripe).toHaveStyle('background-color: rgba(8,76,148)');
    });
  });

  test('Does highlight all stripes for 100%', () => {
    const { getAllByTestId } = render(<WidgetIndicator percentage={0} />);

    const stripes = getAllByTestId(StripesRegexp);
    stripes.forEach((stripe) => {
      expect(stripe).toHaveStyle('background-color: rgba(8,76,148)');
    });
  });

  test.each(widgetVerticalPercentageControlTestCases as [number, string[]][])(
    'Should test all percentages',
    (percentage, colors) => {
      const { getAllByTestId } = render(
        <WidgetIndicator percentage={percentage} />,
      );

      const stripes = getAllByTestId(StripesRegexp);
      stripes.forEach((stripe, index) => {
        expect(stripe).toHaveStyle(`background-color: ${colors[index]}`);
      });
    },
  );

  test('should highlight the correct number of stripes for given percentage', () => {
    const { getByTestId } = render(<WidgetIndicator percentage={60} />);

    expect(
      getByTestId(`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}0`),
    ).toHaveStyle('background-color: rgba(153,217,234)');
    expect(
      getByTestId(`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}1`),
    ).toHaveStyle('background-color: rgba(153,217,234)');
    expect(
      getByTestId(`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}2`),
    ).toHaveStyle('background-color: rgba(153,217,234)');

    expect(
      getByTestId(`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}3`),
    ).toHaveStyle('background-color: rgba(8,76,148)');
    expect(
      getByTestId(`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}4`),
    ).toHaveStyle('background-color: rgba(8,76,148)');
  });
});
