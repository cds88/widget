import { CircularProgress, CircularProgressProps } from '@mui/material';
import React from 'react';

type WidgetLoadingFallbackProps = CircularProgressProps;

export const WidgetLoadingFallback: React.FC<WidgetLoadingFallbackProps> = (
  props,
) => {
  return (
    <div>
      qweqwe
      <CircularProgress
        aria-busy="true"
        role="progressbar"
        {...props}
        data-testid={'loading-spinner'}
      />
    </div>
  );
};
