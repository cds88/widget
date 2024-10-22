import React from 'react';

import { BoxProps, Typography } from '@mui/material';

import {
  WidgetVerticalPercentageControlStyledAddIcon,
  WidgetVerticalPercentageControlStyledIconButton,
  WidgetVerticalPercentageControlStyledPercentageIconButton,
  WidgetVerticalPercentageControlStyledRemoveIcon,
  WidgetVerticalPercentageControlWrapperBox,
} from './styled';
import { WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS } from './const.test';

type WidgetVerticalPercentageControl = {
  value: number;
  onChange: (value: number) => void;
} & Omit<BoxProps, 'onChange'>;

const WidgetVerticalPercentageControl: React.FC<
  WidgetVerticalPercentageControl
> = ({ value, onChange, ...props }) => {
  const handleIncrease = () => {
    if (value < 100) {
      onChange(value + 20);
    }
  };

  const handleDecrease = () => {
    if (value > 0) {
      onChange(value - 20);
    }
  };

  return (
    <WidgetVerticalPercentageControlWrapperBox {...props}>
      <WidgetVerticalPercentageControlStyledIconButton
        data-testid={
          WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_PLUS_BUTTON
        }
        role="button"
        aria-label="increase brightness"
        onClick={handleIncrease}
        disabled={value === 100}
      >
        <WidgetVerticalPercentageControlStyledAddIcon />
      </WidgetVerticalPercentageControlStyledIconButton>
      <WidgetVerticalPercentageControlStyledPercentageIconButton>
        <Typography variant="h2" data-testid={WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_RESULT}>{value}%</Typography>
      </WidgetVerticalPercentageControlStyledPercentageIconButton>
      <WidgetVerticalPercentageControlStyledIconButton
        data-testid={
          WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_LABELS.WIDGET_VERTICAL_PERCENTAGE_CONTROL_DATA_TEST_MINUS_BUTTON
        }
        onClick={handleDecrease}
        disabled={value === 0}
        role="button"
        aria-label="decrease brightness"
      >
        <WidgetVerticalPercentageControlStyledRemoveIcon />
      </WidgetVerticalPercentageControlStyledIconButton>
    </WidgetVerticalPercentageControlWrapperBox>
  );
};

export default WidgetVerticalPercentageControl;
