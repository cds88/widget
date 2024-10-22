declare module '@mui/material/styles' {
  interface Palette {
    background: {
      default: string;
      paper: string;
    };
  }

  interface PaletteOptions {
    background?: {
      default?: string;
      paper?: string;
    };
  }
}
