import { ThemeProvider as MaterialUIThemeProvider } from '@mui/material';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { materialUiTheme } from './materialTheme';
import { styledComponentsTheme } from './styledComponentsTheme';
export const ThemesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <MaterialUIThemeProvider theme={materialUiTheme}>
    <StyledComponentsThemeProvider theme={styledComponentsTheme}>
      {children}
    </StyledComponentsThemeProvider>
  </MaterialUIThemeProvider>
);
