import { Box } from '@mui/material';
import styled from 'styled-components';

export const IndicatorWrapperBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1;
  flex: 1;
  justify-content: center;
  align-content: center;
`;

export const StyledIndicatorStripe = styled(Box)<{ $highlighted: boolean }>`
  flex: 1; // Set a width for the lines
  justify-self: center;
  height: 8px; // Height of the lines
  background-color: ${({ $highlighted }) =>
    $highlighted ? 'rgba(153,217,234)' : 'rgba(8,76,148)'};
  transition: background-color 0.3s;
  align-self: center;
  border-radius: 4px;
  margin-right: 4px;
`;
