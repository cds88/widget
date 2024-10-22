import React from "react";
import {
  WidgetTHR08BatteryTimeLeft,
  WidgetTHR08ButtonPanels,
  WidgetTHR08Indicator,
  WidgetTHR08Label,
  WidgetTHR08VerticalPercentageControl,
  WidgetTHR08Wrapper,
} from "./styled";


 
import { AVAILABLE_WIDGETS } from "../const";
import { WIDGET_THR08_BUTTON_PANELS_OPTIONS_LABELS } from "./const";
import { WidgetTHR08State } from "./types";

export interface WidgetTHR08Props {
  brightness: number;
  onSetBrightness: (value: number) => void;
  timeLeft: number;
  onSetButtonPanel: (
    buttonPanelKeyValPair: Partial<
      Pick<WidgetTHR08State, "flashing" | "nightVision" | "duskTillDawn">
    >
  ) => void;
  widgetTHR08ButtonPanels: Pick<
    WidgetTHR08State,
    "duskTillDawn" | "flashing" | "nightVision"
  >;
}

const WidgetTHR08: React.FC<WidgetTHR08Props> = ({
  brightness,
  onSetBrightness,
  timeLeft,
  onSetButtonPanel,
  widgetTHR08ButtonPanels,
}) => {
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
