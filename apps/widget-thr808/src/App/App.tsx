import {
  QueryClient,
  QueryClientProvider,
  useSuspenseQuery,
} from '@tanstack/react-query';
import React, { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { AppWrapper } from './styled';
import { WidgetTHR08 } from '@widget/organisms';
import { WidgetErrorFallback, WidgetLoadingFallback } from '@widget/molecules';
import { AVAILABLE_WIDGETS } from '@widget/organisms/const'; 
import { WidgetTHR08State } from '@widget/organisms/WidgetTHR08/types';
import { fetchWidgetState } from '../utils/action';
import { isWidgetTHR08State } from '../../../../components/organisms/WidgetTHR08/utils';



export const fetchData = async (): Promise<WidgetTHR08State> => {
  const data = await fetchWidgetState();
  if (isWidgetTHR08State(data)) return data;
  throw new Error('Invalid data format');
};


const App = () => {
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

      <WidgetTHR08
        brightness={brightness}
        onSetBrightness={onSetBrightness}
        timeLeft={timeLeft}
        onSetButtonPanel={onSetButtonPanel}
        widgetTHR08ButtonPanels={widgetTHR08ButtonPanels}
      />

  );
};

export default App;
