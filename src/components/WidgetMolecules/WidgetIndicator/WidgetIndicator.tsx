import { BoxProps } from '@mui/material';
import React from 'react';
import { IndicatorWrapperBox, StyledIndicatorStripe } from './styled';
import { WIDGET_INDICATOR_DATA_TEST_IDS } from './const.test';

type IndicatorProps = {
  percentage: number;
} & BoxProps;

const WidgetIndicator: React.FC<IndicatorProps> = ({
  percentage,
  ...props
}) => {
  const levels = [20, 40, 60, 80, 100];

  return (
    <IndicatorWrapperBox
      data-testid={WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_WRAPPER_BOX}
      {...props}
    >
      {levels.map((level, index) => {
        const highlighted = percentage >= level;
        return (
          <StyledIndicatorStripe
            data-testid={`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}${index}`}
            key={index}
            $highlighted={highlighted}
          />
        );
      })}
    </IndicatorWrapperBox>
  );
};

export default WidgetIndicator;
