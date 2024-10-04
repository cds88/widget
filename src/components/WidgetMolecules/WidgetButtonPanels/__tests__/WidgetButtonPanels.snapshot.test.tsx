import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import WidgetButtonPanels from '../WidgetButtonPanels';
import { WidgetButtonPanelsOptionsLabels } from '../types';

type TestKeys = 'option1' | 'option2' | 'option3';
const widgetButtonPanelsOptionsLabels: WidgetButtonPanelsOptionsLabels<TestKeys> =
  {
    option1: 'Label 1',
    option2: 'Label 2',
    option3: 'Label 3',
  };

const state: Record<TestKeys, boolean> = {
  option1: true,
  option2: false,
  option3: true,
};

describe('WidgetButtonPanels', () => {
  const mockOnChange = jest.fn();
  const optionsLabels = {
    panel1: 'Panel 1',
    panel2: 'Panel 2',
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('should render the WidgetButtonPanels and match snapshot', () => {
    const { asFragment } = render(
      <WidgetButtonPanels
        onChange={mockOnChange}
        widgetButtonPanelsOptionsLabels={widgetButtonPanelsOptionsLabels}
        state={state}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('should render with all switches off', () => {
    const allOffState: Record<TestKeys, boolean> = {
      option1: false,
      option2: false,
      option3: false,
    };

    const { asFragment } = render(
      <WidgetButtonPanels
        onChange={mockOnChange}
        widgetButtonPanelsOptionsLabels={widgetButtonPanelsOptionsLabels}
        state={allOffState}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
