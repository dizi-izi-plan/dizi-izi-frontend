import { MyGrey } from '@/helpers/interfaces';
import { createTheme } from '@mui/material';

export const myGrey: Partial<MyGrey> = {
  grey100: '#DEDEDE',
  grey200: '#D4D4D4',
  grey300: 'rgba(61, 60, 60, 0.30)',
  grey400: 'rgba(61, 60, 60, 0.50)',
  grey500: '#898989',
  grey600: 'rgba(0, 0, 0, 0.60)',
  grey700: '#464646',
  grey800: '#3D3C3C',
};

let theme = createTheme({
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
      fontSize: 128,
      fontWeight: 500,
      fontFamily: 'Cabin, sans-serif',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    h2: {
      fontFamily: 'Cabin, sans-serif',
      fontSize: 32,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '41.416px',
    },
    h3: {
      fontFamily: 'Cabin, sans-serif',
      fontSize: 24,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    subtitle1: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: 24,
      fontStyle: 'normal',
      lineHeight: '41.416px',
    },
    body1: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: 20,
      fontStyle: 'normal',
      lineHeight: '33.4px',
    },
    body2: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: 18,
      fontStyle: 'normal',
      lineHeight: '33.4px',
      fontWeight: 300,
      letterSpacing: '0.09px',
    },
    caption: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: 16,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    overline: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: 14,
      fontStyle: 'normal',
      lineHeight: 'normal',
      textTransform: 'none',
    },
    button: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: 20,
      fontStyle: 'normal',
      lineHeight: 'normal',
      fontWeight: 400,
      textTransform: 'none',
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'default' },
          style: {
            borderRadius: 0,
            color: '#fff',
            border: `1px solid ${theme.palette.primary.main}`,
            minHeight: '54px',
            width: '209px',
            '&:hover': {
              color: '#000',
              backgroundColor: theme.palette.primary.main,
            },
            '&:active': {
              backgroundColor: theme.palette.primary.dark,
            },
            '&:disabled': {
              color: theme.palette.secondary.main,
              backgroundColor: myGrey.grey100,
              border: 'none',
            },
          },
        },
        {
          props: { variant: 'box' },
          style: {
            width: '256px',
            height: '254px',
            display: 'flex',
            gap: '16px',
            borderRadius: 0,
            color: '#fff',
            border: `1px solid ${theme.palette.primary.main}`,
            '&:hover': {
              color: '#000',
              backgroundColor: theme.palette.primary.main,
            },
            '&:active': {
              backgroundColor: theme.palette.primary.dark,
            },
            '&:disabled': {
              color: theme.palette.secondary.main,
              backgroundColor: myGrey.grey100,
              border: 'none',
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});

interface MyPaletteExtensions {
  myGrey: Partial<MyGrey>;
}

declare module '@mui/material/styles' {
  interface Palette extends MyPaletteExtensions {
    black: Palette['primary'];
  }
  interface PaletteOptions extends MyPaletteExtensions {
    black?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    default: true;
    box: true;
  }
}

export default theme;
