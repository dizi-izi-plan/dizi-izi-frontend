import { createTheme } from '@mui/material';
import { cabin, manrope } from './fonts';

type myGrey = {
  [key: string]: string;
};

const myGrey: myGrey = {
  grey100: '#DEDEDE',
  grey200: '#D4D4D4',
  grey300: 'rgba(61, 60, 60, 0.30)',
  grey400: 'rgba(61, 60, 60, 0.50)',
  grey500: '#898989',
  grey600: 'rgba(0, 0, 0, 0.60)',
  grey700: '#464646',
  grey800: '#3D3C3C',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC000',
      dark: '#F5B800',
      contrastText: '#181818',
    },
    secondary: {
      main: '#181818',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#E50505',
    },
    success: {
      main: '#0CBA1D',
    },
    warning: {
      main: '#FF9900',
    },
    info: {
      main: '#3894D6',
    },
    myGrey,
    black: {
      main: '#000',
    },
  },
  typography: {
    h1: {
      fontFamily: cabin.style.fontFamily,
      fontSize: 128,
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    h2: {
      fontFamily: cabin.style.fontFamily,
      fontSize: 32,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '41.416px',
    },
    h3: {
      fontFamily: cabin.style.fontFamily,
      fontSize: 24,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    subtitle1: {
      fontFamily: manrope.style.fontFamily,
      fontSize: 24,
      fontStyle: 'normal',
      lineHeight: '41.416px',
    },
    body1: {
      fontFamily: manrope.style.fontFamily,
      fontSize: 20,
      fontStyle: 'normal',
      lineHeight: '33.4px',
    },
    body2: {
      fontFamily: manrope.style.fontFamily,
      fontSize: 18,
      fontStyle: 'normal',
      lineHeight: '33.4px',
      fontWeight: 300,
      letterSpacing: '0.09px',
    },
    overline: {
      fontFamily: manrope.style.fontFamily,
      fontSize: 16,
      fontStyle: 'normal',
      lineHeight: 'normal',
      textTransform: 'none',
    },
    caption: {
      fontFamily: manrope.style.fontFamily,
      fontSize: 14,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    button: {
      fontFamily: manrope.style.fontFamily,
      fontSize: 20,
      fontStyle: 'normal',
      lineHeight: 'normal',
      fontWeight: 400,
      textTransform: 'none',
    },
  },
});

type MyPaletteExtensions = {
  myGrey: myGrey;
};

declare module '@mui/material/styles' {
  interface Palette extends MyPaletteExtensions {
    black: Palette['primary'];
  }
  interface PaletteOptions extends MyPaletteExtensions {
    black?: PaletteOptions['primary'];
  }
}
