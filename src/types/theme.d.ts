declare module '@mui/material/styles' {
  interface Palette {
    background: {
      default: string;
      paper: string;
    };
    stripes?: {
      active?: string;
    };
  }

  interface PaletteOptions {
    background?: {
      default?: string;
      paper?: string;
    };

    stripes?: {
      active?: string;
    };
  }
}

declare module '@mui/system/styles' {
  interface Palette {
    background: {
      default: string;
      paper: string;
    };
    stripes: {
      active: string;
    };
  }

  interface PaletteOptions {
    background?: {
      default?: string;
      paper?: string;
    };
    stripes?: {
      active?: string;
    };
  }
}
