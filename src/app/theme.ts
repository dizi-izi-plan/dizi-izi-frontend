import { MyGrey } from '@/helpers/interfaces';
import { createTheme } from '@mui/material';


export const myGrey: Partial<MyGrey> = {
  grey100: '#D4D4D4',
  grey200: '#DEDEDE',
  grey300: '#898989',
  grey400: 'rgba(61, 60, 60, 0.30)',
  grey500: 'rgba(61, 60, 60, 0.50)',
  grey600: '#464646',
  grey700: '#3D3C3C',
  grey800: 'rgba(0, 0, 0, 0.60)',
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC000',
      dark: '#ECB201',
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
    
  }
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

export default theme;
