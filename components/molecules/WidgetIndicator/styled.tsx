import { Box } from "@mui/material";
import styled from "styled-components";

export const IndicatorWrapperBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1;
  flex: 1;
  justify-content: center;
  align-content: center;
`;

export const StyledIndicatorStripe = styled(Box)<{ $highlighted: boolean }>`
  flex: 1;
  justify-self: center;
  height: 18px;
  background-color: ${({ $highlighted, theme }) =>
    $highlighted
      ? theme.styled.colors.indicator.selected
      : theme.styled.colors.indicator.notSelected};
  transition: background-color 0.3s;
  align-self: center;
  margin-right: 18px;
`;
