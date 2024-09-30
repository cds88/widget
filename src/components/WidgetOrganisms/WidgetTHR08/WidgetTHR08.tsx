import React, { useState } from 'react';
import {
  WidgetTHR08BatteryTimeLeft,
  WidgetTHR08ButtonPanels,
  WidgetTHR08Indicator,
  WidgetTHR08Label,
  WidgetTHR08VerticalPercentageControl,
  WidgetTHR08Wrapper,
} from './styled';

import { useSuspenseQuery } from '@tanstack/react-query';
import { AVAILABLE_WIDGETS } from '../../../state/const';
import { fetchData } from './actions';
import { WIDGET_THR08_BUTTON_PANELS_OPTIONS_LABELS } from './const';
import { WidgetTHR08State } from './types';

const WidgetTHR08: React.FC = () => { 
  const { data } = useSuspenseQuery<WidgetTHR08State, Error>({
    queryKey: [AVAILABLE_WIDGETS.WIDGET_TH08],
    queryFn: fetchData,
  });
 
  const [widgetTHR08State, setWidgetTHR08State] =
    useState<WidgetTHR08State>(data);
  const { brightness, timeLeft, ...widgetTHR08ButtonPanels } = widgetTHR08State;

  const onSetBrightness = (value: number) => {
    setWidgetTHR08State((state) => ({
      ...state,
      brightness: value,
    }));
  };

  const onSetButtonPanel = (
    buttonPanelKeyValPair: Partial<
      Pick<WidgetTHR08State, 'flashing' | 'nightVision' | 'duskTillDawn'>
    >,
  ) => {
    setWidgetTHR08State((state) => ({
      ...state,
      ...buttonPanelKeyValPair,
    }));
  };

  return (
    <WidgetTHR08Wrapper>
      <WidgetTHR08Label>{AVAILABLE_WIDGETS.WIDGET_TH08}</WidgetTHR08Label>
      <WidgetTHR08Indicator percentage={brightness} />
      <WidgetTHR08VerticalPercentageControl
        value={brightness}
        onChange={onSetBrightness}
      />
      <WidgetTHR08BatteryTimeLeft hoursLeft={timeLeft} />
      <WidgetTHR08ButtonPanels
        widgetButtonPanelsOptionsLabels={
          WIDGET_THR08_BUTTON_PANELS_OPTIONS_LABELS
        }
        onChange={onSetButtonPanel}
        state={widgetTHR08ButtonPanels}
      />
    </WidgetTHR08Wrapper>
  );
};

export default WidgetTHR08;
