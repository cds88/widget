import { ContainerProps } from '@mui/material';
import React from 'react';

 
import { WidgetButtonPanelsContainer } from './styled';
import { WidgetButtonPanelsOptionsLabels } from './types';
import { WIDGET_BUTTON_PANELS } from './const.test';   
import { WidgetButtonPanel } from '@widget/atoms';

 
 
 
 
 

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
