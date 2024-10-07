import '@testing-library/jest-dom';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import React from 'react';
import widgetVerticalPercentageControlTestCases from '../../../../testCases/widgetIndicatorTestCases.json';
import { WIDGET_INDICATOR_DATA_TEST_IDS } from '../const.test';
import WidgetIndicator from '../WidgetIndicator';
 
import { ThemesProvider } from '../../../../styles/ThemesProvider';
import { styledComponentsTheme } from '../../../../styles/styledComponentsTheme';


const StripesRegexp = new RegExp(
  `^${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}\\d+$`,
);

describe('WidgetIndicator', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render( <ThemesProvider><WidgetIndicator percentage={50} /></ThemesProvider>);
    expect(
      getByTestId(WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_WRAPPER_BOX),
    ).toBeInTheDocument();
  });

  test('renders correct number of stripes', () => {
    const { getAllByTestId } = render(<ThemesProvider><WidgetIndicator percentage={50} /></ThemesProvider>);
    const stripes = getAllByTestId(StripesRegexp);
    expect(stripes.length).toBe(5);
  });

  test('does not highlight any stripes for 0%', () => {
    const { getAllByTestId } = render(<ThemesProvider  ><WidgetIndicator percentage={0} /></ThemesProvider>);

    const stripes = getAllByTestId(StripesRegexp);
    stripes.forEach((stripe) => {
      expect(stripe).toHaveStyleRule('background-color', styledComponentsTheme.styled.colors.indicator.notSelected);
    });
  });

  test('Does highlight all stripes for 100%', () => {
    const { getAllByTestId } = render(<ThemesProvider  ><WidgetIndicator percentage={100} /></ThemesProvider>);

    const stripes = getAllByTestId(StripesRegexp);
    stripes.forEach((stripe) => {
      expect(stripe).toHaveStyleRule('background-color',styledComponentsTheme.styled.colors.indicator.selected);
    });
  });

  test.each(widgetVerticalPercentageControlTestCases as [number, string[]][])(
    'Should test all percentages',
    (percentage, colors) => {
      const { getAllByTestId } = render(
        <ThemesProvider ><WidgetIndicator percentage={percentage} /></ThemesProvider>,
      );

      const stripes = getAllByTestId(StripesRegexp);
      stripes.forEach((stripe, index) => {
        expect(stripe).toHaveStyleRule(`background-color` , colors[index]);
      });
    },
  );

  test('should highlight the correct number of stripes for given percentage', () => {
    const { getByTestId } = render(<ThemesProvider  ><WidgetIndicator percentage={60} /></ThemesProvider>);

    expect(
      getByTestId(`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}0`),
    ).toHaveStyleRule('background-color', styledComponentsTheme.styled.colors.indicator.selected);
    expect(
      getByTestId(`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}1`),
    ).toHaveStyleRule('background-color', styledComponentsTheme.styled.colors.indicator.selected);
    expect(
      getByTestId(`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}2`),
    ).toHaveStyleRule('background-color',  styledComponentsTheme.styled.colors.indicator.selected);

    expect(
      getByTestId(`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}3`),
    ).toHaveStyleRule('background-color', styledComponentsTheme.styled.colors.indicator.notSelected);
    expect(
      getByTestId(`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}4`),
    ).toHaveStyleRule('background-color', styledComponentsTheme.styled.colors.indicator.notSelected);
  });
});
