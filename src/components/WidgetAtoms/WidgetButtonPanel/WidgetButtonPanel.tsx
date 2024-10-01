import {  BoxProps, Switch, Typography } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { WidgetButtonPanelWrapperBox } from './styled';


type WidgetButtonPanelProps = {
  children: React.ReactNode;
  checked: boolean;
  onChange: (value: boolean) => void;
} & Omit<BoxProps, 'onChange' | 'sx'>

const WidgetButtonPanel: React.FC<WidgetButtonPanelProps> = ({
  children,
  checked,
  onChange,
  ...props
}) => {
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <WidgetButtonPanelWrapperBox {...props}>
      <Typography variant="h4">{children}</Typography>
      <Switch checked={checked} onChange={handleToggle} />
    </WidgetButtonPanelWrapperBox>
  );
};

export default WidgetButtonPanel;
