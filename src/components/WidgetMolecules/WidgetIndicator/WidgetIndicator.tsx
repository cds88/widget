import { BoxProps } from '@mui/material';
import React from 'react';
import { IndicatorWrapperBox, StyledIndicatorStripe } from './styled';
import { WIDGET_INDICATOR_DATA_TEST_IDS } from './const.test';
import { WIDGET_INDICATOR_LEVELS } from './const';

type IndicatorProps = {
  percentage: number;
} & BoxProps;

const WidgetIndicator: React.FC<IndicatorProps> = ({
  percentage,
  ...props
}) => {
  return (
    <IndicatorWrapperBox
      data-testid={WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_WRAPPER_BOX}
      {...props}
    >
      {WIDGET_INDICATOR_LEVELS.map((level, index) => {
        const highlighted = percentage >= level;
        return (
          <StyledIndicatorStripe
            data-testid={`${WIDGET_INDICATOR_DATA_TEST_IDS.WIDGET_INDICATOR_STRIPE}${index}`}
            aria-selected={highlighted? true: false}
            key={index}
            $highlighted={highlighted}
          />
        );
      })}
    </IndicatorWrapperBox>
  );
};

export default WidgetIndicator;
