import Box from "@mui/system/Box";
import { styled } from "@mui/system";
import {
  WidgetLabel,
  WidgetIndicator,
  WidgetVerticalPercentageControl,
  WidgetBatteryTimeLeft,
  WidgetButtonPanels,
} from "@widget/molecules";

export const WidgetTHR08Wrapper = styled(Box)`
  background: ${({ theme }) => `${theme.palette.background.paper}`};
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: 50vw;
  height: 50vh;

  padding: 1rem;
  gap: 2;
`;

export const WidgetTHR08Label = styled(WidgetLabel)`
  grid-column: span 2;
  grid-row: 1/2;
`;

export const WidgetTHR08Indicator = styled(WidgetIndicator)`
  grid-column: span 5;
  grid-row: 1/2;
  display: flex;
`;

export const WidgetTHR08VerticalPercentageControl = styled(
  WidgetVerticalPercentageControl
)`
  grid-column: span 2;
  grid-row: 2/8;
  margin-right: 1rem;
`;

export const WidgetTHR08BatteryTimeLeft = styled(WidgetBatteryTimeLeft)`
  grid-column: span 5;
  grid-row: 2/4;
`;

export const WidgetTHR08ButtonPanels = styled(WidgetButtonPanels)`
  grid-column: span 5;
  grid-row: 4/8;
`;
