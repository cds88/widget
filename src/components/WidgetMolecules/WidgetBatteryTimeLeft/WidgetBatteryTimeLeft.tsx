import { BoxProps, Typography } from '@mui/material';
import React from 'react';
import { BATTERY_DATA_TEST_IDS } from './const.test';
import {
  BatteryIcon,
  BatteryIconWrapper,
  WidgetBatteryTimeLeftWrapper,
} from './styled';
import { convertHoursStateToReadableTime } from './utils/convertHoursStateToReadableTime';

export type WidgetBatteryTimeLeftProps = {
  hoursLeft: number;
} & BoxProps;

const WidgetBatteryTimeLeft: React.FC<WidgetBatteryTimeLeftProps> = ({
  hoursLeft,
  ...props
}) => {
  const effectiveTimeLeft = convertHoursStateToReadableTime(hoursLeft);

  return (
    <WidgetBatteryTimeLeftWrapper
      data-testid={BATTERY_DATA_TEST_IDS.BATTERY_TIME_LEFT_WRAPPER}
      {...props}
    >
      <BatteryIconWrapper
        data-testid={BATTERY_DATA_TEST_IDS.BATTERY_ICON_WRAPPER}
      >
        <BatteryIcon data-testid={BATTERY_DATA_TEST_IDS.BATTERY_ICON} />
        <Typography
          data-testid={BATTERY_DATA_TEST_IDS.BATTERY_TEXT_LABEL}
          variant="h4"
        >
          Time left
        </Typography>
      </BatteryIconWrapper>

      <Typography
        variant="h4"
        data-testid={BATTERY_DATA_TEST_IDS.BATTERY_EFFECTIVE_TIME_LEFT}
      >
        {effectiveTimeLeft}
      </Typography>
    </WidgetBatteryTimeLeftWrapper>
  );
};

export default WidgetBatteryTimeLeft;
