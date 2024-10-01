import { Box, IconButton, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const WidgetVerticalPercentageControlWrapperBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2;
  border-radius: 2px;
  flex: 1;
  height: 100%;
`;

export const WidgetVerticalPercentageControlStyledIconButton = styled(IconButton)`
  background-color: rgba(44, 129, 246, 255); 
  color: #ffffff;  
  &:hover {
    background-color: rgb(23, 52, 86);
  }
  border-radius: 8px;  
  flex: 1;
  display: flex;
  width: 100%;
`;

export const WidgetVerticalPercentageControlStyledAddIcon = styled(AddIcon)`
  font-size: 3rem;
  
`;

export const WidgetVerticalPercentageControlStyledRemoveIcon = styled(RemoveIcon)`
  font-size: 3rem;
`

export const WidgetVerticalPercentageControlStyledPercentageIconButton = styled(WidgetVerticalPercentageControlStyledIconButton)`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  margin: 4px 0px;
`;
