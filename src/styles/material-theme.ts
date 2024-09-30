import { createTheme  } from '@mui/material';


export const appTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#673AB7',  
    },
    background: {
      default: 'rgba(3,21,45,255)',  
      paper: 'rgba(16,41,72,255)', 
 
    },
 
  },
});
