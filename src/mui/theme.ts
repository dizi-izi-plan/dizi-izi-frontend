import { createTheme } from '@mui/material';
import { cabin, manrope } from './fonts';

const myGrey = {
  grey100: '#DEDEDE',
  grey200: '#D4D4D4',
  grey300: '#3D3C3C4D',
  grey400: '#3D3C3C80',
  grey500: '#898989',
  grey600: '#00000099',
  grey700: '#464646',
  grey800: '#3D3C3C',
};

export let theme = createTheme({
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

theme = createTheme(theme, {
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
        InputProps: {
          sx: {
            borderRadius: 0,
            boxSizing: 'border-box',
            borderWidth: 1,
            borderStyle: 'solid',
            '& fieldset': {
              border: 'none',
            },
          },
        },
        inputProps: {
          style: {
            boxSizing: 'border-box',
            fontFamily: manrope.style.fontFamily,
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          },
        },
        InputLabelProps: {
          shrink: true,
          style: {
            fontFamily: manrope.style.fontFamily,
            fontStyle: 'normal',
            lineHeight: 'normal',
            top: '-15px',
            left: '-12px',
          },
        },
      },
      styleOverrides: {
        root: {
          // this is styles for new variants
          '&.subvariant-dark': {
            '& .MuiOutlinedInput-root': {
              borderWidth: '1px',
              borderColor: theme.palette.secondary.contrastText,
              borderStyle: 'solid',
              borderRadius: 0,
              '& > fieldset': {
                border: 'none',
              },
            },
            '& .MuiOutlinedInput-input': {
              color: theme.palette.secondary.contrastText,
              fontSize: 18,
              minHeight: 45,
              padding: '10px 16px',
            },
            '& .MuiFormLabel-root': {
              color: theme.palette.secondary.contrastText,
              fontSize: 16,
              fontWeight: 500,
            },
          },
          '&.subvariant-light': {
            '& .MuiOutlinedInput-input': {
              color: theme.palette.black.main,
              fontSize: 20,
              minHeight: 55,
              padding: '16px 16px',
            },
            '& .MuiOutlinedInput-root': {
              borderWidth: '1px',
              borderColor: theme.palette.primary.main,
              borderStyle: 'solid',
              borderRadius: 0,
              '& > fieldset': {
                border: 'none',
              },
            },
            '& .MuiFormLabel-root': {
              color: theme.palette.myGrey.grey600,
              fontSize: 18,
              fontWeight: 400,
            },
            '& .MuiOutlinedInput-input::placeholder': {
              color: '#898989',
            },
          },
          '&.subvariant-gray': {
            '& .MuiOutlinedInput-input': {
              color: theme.palette.black.main,
              fontSize: 14,
              minHeight: 48,
              padding: '10px 16px',
              textAlign: 'center',
            },
            '& .MuiOutlinedInput-root': {
              color: theme.palette.black.main,
            },
            '& .MuiOutlinedInput-input::placeholder': {
              color: theme.palette.myGrey.grey300,
            },
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          // this is styles for new variants
          '& .MuiFormControlLabel-label': {
            color: theme.palette.myGrey.grey800,
            textAlign: 'center',
            fontFamily: manrope.style.fontFamily,
            fontStyle: 'normal',
            lineHeight: 'normal',
          },
          '&.subvariant-start .MuiFormControlLabel-label': {
            fontSize: 20,
            fontWeight: 400,
          },
          '&.subvariant-start': {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          },
          '&.subvariant-end .MuiFormControlLabel-label': {
            fontSize: 14,
            fontWeight: 500,
          },
          '&.subvariant-end': {
            columnGap: 8,
            justifyContent: 'flex-start',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: theme.palette.black.main,
          padding: 0,
          '&.Mui-checked': {
            color: theme.palette.black.main,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          '&.Mui-checked': {
            color: theme.palette.primary.main,
          },
          '& path': {
            borderRadius: 0,
          },
        },
      },
    },
  },
});

type MyPaletteExtensions = {
  myGrey: typeof myGrey;
};

declare module '@mui/material/styles' {
  interface Palette extends MyPaletteExtensions {
    black: Palette['primary'];
  }
  interface PaletteOptions extends MyPaletteExtensions {
    black?: PaletteOptions['primary'];
  }
}
