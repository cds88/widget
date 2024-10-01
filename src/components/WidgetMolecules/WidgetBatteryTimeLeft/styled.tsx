import styled from '@emotion/styled';
import { Box } from '@mui/material';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

export const WidgetBatteryTimeLeftWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(27, 60, 103, 255);
  color: white;
  padding: 0 2rem;
  border-radius: 8px;
  width: 100%;
  flex: 1;
`;

export const BatteryIconWrapper = styled(Box)`
  display:flex;
  align-items:center;
`

export const BatteryIcon = styled(BatteryChargingFullIcon)`
 margin-right: 8px;
 color: linear-gradient(white, #f0f0f0);
 filter: brightness(1.2);
`