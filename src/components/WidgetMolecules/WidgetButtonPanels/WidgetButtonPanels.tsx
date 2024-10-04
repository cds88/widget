import { ContainerProps } from '@mui/material';
import React from 'react';

import WidgetButtonPanel from '../../WidgetAtoms/WidgetButtonPanel/WidgetButtonPanel';
import { WidgetButtonPanelsContainer } from './styled';
import { WidgetButtonPanelsOptionsLabels } from './types';
import { WIDGET_BUTTON_PANELS } from './__tests__/const.test';

type WidgetButtonPanelsProps<T extends string> = {
  onChange: (partialButtonPanelKeyValPair: Partial<Record<T, boolean>>) => void;
  widgetButtonPanelsOptionsLabels: WidgetButtonPanelsOptionsLabels<T>;
  state: Record<T, boolean>;
} & Omit<ContainerProps, 'onChange'>;

const WidgetButtonPanels = <T extends string>({
  onChange,
  widgetButtonPanelsOptionsLabels,
  state,
  ...props
}: WidgetButtonPanelsProps<T>) => {
  return (
    <WidgetButtonPanelsContainer {...props} data-testid={WIDGET_BUTTON_PANELS.WIDGET_BUTTON_PANELS_CONTAINER}>
      {Object.entries(widgetButtonPanelsOptionsLabels).map(([key, val]) => {
        const typedKey = key as T;
        const handleOnChange = (checked: boolean) => {
          onChange({
            [typedKey]: checked,
          } as Partial<Record<T, boolean>>);
        }
        return (
          <WidgetButtonPanel
            key={key}
            checked={state[typedKey]}
            onChange={handleOnChange}
            data-testid={`${WIDGET_BUTTON_PANELS.WIDGET_BUTTON_PANELS_PANEL_COMPONENT}${key}`}
          >
            {`${val}`}
          </WidgetButtonPanel>
        );
      })}
    </WidgetButtonPanelsContainer>
  );
};

export default WidgetButtonPanels;
