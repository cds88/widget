import '@testing-library/jest-dom';
import { fireEvent, render, within } from '@testing-library/react';
import React from 'react';
import WidgetButtonPanels from '../WidgetButtonPanels';
import { WIDGET_BUTTON_PANELS } from './const.test';
 

const getPanel = (
  getByText: (text: string) => HTMLElement,
  label: string,
): HTMLElement => {
  const panel = getByText(label);
  expect(panel).toBeInTheDocument();
  return panel as HTMLElement;
};

const getPanelCheckbox = (panel: HTMLElement) => {
  const panelCheckbox = within(panel).getByRole('checkbox');
  expect(panelCheckbox).toBeInTheDocument();
  return panelCheckbox;
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

  test('Elements found by test-id', () => {
    const initialState = {
      panel1: true,
      panel2: false,
    };

    const { getByTestId } = render(
      <WidgetButtonPanels
        onChange={mockOnChange}
        widgetButtonPanelsOptionsLabels={optionsLabels}
        state={initialState}
      />,
    );

    const panelContainer = getByTestId(
      WIDGET_BUTTON_PANELS.WIDGET_BUTTON_PANELS_CONTAINER,
    );
    const panel1 = getByTestId(
      `${WIDGET_BUTTON_PANELS.WIDGET_BUTTON_PANELS_PANEL_COMPONENT}panel1`,
    );
    const panel2 = getByTestId(
      `${WIDGET_BUTTON_PANELS.WIDGET_BUTTON_PANELS_PANEL_COMPONENT}panel2`,
    );
    expect(panelContainer).toBeInTheDocument();
    expect(panel1).toBeInTheDocument();
    expect(panel2).toBeInTheDocument();
    expect(panel1).toHaveTextContent('Panel 1');
    expect(panel2).toHaveTextContent('Panel 2');

    expect(within(panel1).getByRole('checkbox')).toBeChecked();
    expect(within(panel2).getByRole('checkbox')).not.toBeChecked();
  });

  test('renders button panels correctly based on options', () => {
    const initialState = {
      panel1: false,
      panel2: true,
    };

    const { getByText, debug } = render(
      <WidgetButtonPanels
        onChange={mockOnChange}
        widgetButtonPanelsOptionsLabels={optionsLabels}
        state={initialState}
      />,
    );

    expect(getByText('Panel 1')).toBeInTheDocument();
    expect(getByText('Panel 2')).toBeInTheDocument();

    const panel1 = getByText('Panel 1').nextElementSibling;
    expect(panel1).toBeInTheDocument();
    const panel1Checkbox = within(panel1 as HTMLElement);

    expect(panel1Checkbox.getByRole('checkbox')).not.toBeChecked();

    const panel2 = getByText('Panel 2').nextElementSibling;
    expect(panel2).toBeInTheDocument();
    const panel2Checkbox = within(panel2 as HTMLElement);
    expect(panel2Checkbox.getByRole('checkbox')).toBeChecked();
  });

  test('calls onChange with correct values when toggled', () => {
    const initialState = {
      panel1: false,
      panel2: true,
    };

    const { getByText } = render(
      <WidgetButtonPanels
        onChange={mockOnChange}
        widgetButtonPanelsOptionsLabels={optionsLabels}
        state={initialState}
      />,
    );

    const panel1 = getPanel(getByText, 'Panel 1');
    const panel1Checkbox = getPanelCheckbox(
      panel1.nextElementSibling as HTMLElement,
    );
    fireEvent.click(panel1Checkbox);
    expect(mockOnChange).toHaveBeenCalledWith({ panel1: true });

    const panel2 = getPanel(getByText, 'Panel 2');
    const panel2Checkbox = getPanelCheckbox(
      panel2.nextElementSibling as HTMLElement,
    );
    fireEvent.click(panel2Checkbox);
    expect(mockOnChange).toHaveBeenCalledWith({ panel2: false });
  });
});
