import { BoxProps } from '@mui/material';
import React from 'react';
import { WidgetLabelWrapperBox } from './styled';


const WidgetLabel: React.FC<BoxProps> = ({children,  ...props }) => {
  return (
    <WidgetLabelWrapperBox {...props} >
      <h2>{children}</h2>
    </WidgetLabelWrapperBox>
  );
};

export default WidgetLabel;
