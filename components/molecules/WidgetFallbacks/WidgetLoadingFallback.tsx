import { CircularProgress, CircularProgressProps } from '@mui/material';
import React from 'react';
import { SPINNER_DATA_TESTIDS } from './const.test';

type WidgetLoadingFallbackProps = CircularProgressProps;

export const WidgetLoadingFallback: React.FC<WidgetLoadingFallbackProps> = (
  props,
) => {
  return (
      <CircularProgress
        aria-busy="true"
        role="progressbar"
        {...props}
        data-testid={SPINNER_DATA_TESTIDS.SPINNER_CIRCULAR_PROGRESS}
      />
  );
};
