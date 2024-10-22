import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const AppWrapper = styled(Box)`
  display: flex;
  background: ${({theme})=>`${theme.palette.background.default}`};
  justify-content: center;
  align-items: center;
  height: 100vh;
`
