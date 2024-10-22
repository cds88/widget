import { WidgetTHR08Props } from "../WidgetTHR08";

export const mockTHR08Props: WidgetTHR08Props = {
    brightness: 60,
    onSetBrightness: jest.fn(),
    onSetButtonPanel: jest.fn(),
    timeLeft: 90,
    widgetTHR08ButtonPanels: {
      duskTillDawn: true,
      flashing: false,
      nightVision: true,
    },
  };