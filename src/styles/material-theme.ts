import { createTheme } from '@mui/material';

export const appTheme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.75rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
    },

    button: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        colorSecondary: {
          '&$checked': {
            color: 'linear-gradient(white, #f0f0f0)',
          },
        },
        switchBase: {
          '&.Mui-checked': {
            color: '#FFFFFF',
          },
        },
        track: {
          '&.Mui-checked': {
            backgroundColor: '#FFFFFF',
          },
          '$checked$checked + &': {
            opacity: 0.7,
            backgroundColor: '#fff',
          },
          backgroundColor: 'linear-gradient(white, #f0f0f0)',
        },
      },
    },
  },
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
