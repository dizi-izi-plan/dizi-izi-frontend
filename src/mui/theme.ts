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
      main: '#E55605',
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

const commonButtonStyle = {
  padding: 0,
  borderRadius: 0,
  minHeight: '54px',
  border: `1px solid ${theme.palette.primary.main}`,
  '&:hover': {
    color: theme.palette.black.main,
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
};

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
          sx: {
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
              maxHeight: 55,
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
              top: '-15px',
              left: '-12px',
            },
            '& .MuiOutlinedInput-input::placeholder': {
              color: theme.palette.myGrey.grey500,
              opacity: 1,
              fontSize: 20,
            },
            '& .MuiAutocomplete-input': {
              position: 'relative',
              top: '-25px',
              left: '-9px',
            },
          },
          '&.subvariant-grey': {
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
          },
          '&.subvariant-rename': {
            '& .MuiOutlinedInput-input': {},
            '& .Mui-disabled': {
              '& .MuiInputBase-input': {
                WebkitTextFillColor: theme.palette.secondary.main,
              },
              '& > fieldset': {
                pointerEvents: 'inherit',
                cursor: 'pointer',
                fontSize: 20,
                padding: '0px',
                minHeight: 31,
              },
            },
            '& .MuiInputBase-root': {
              borderColor: 'transparent',
              '& .MuiInputBase-input': {
                fontSize: 20,
                minHeight: 31,
                caretColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                padding: '0px',
              },
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.subvariant-grey': {
            '& .MuiInputBase-input': {
              color: theme.palette.black.main,
              fontSize: 18,
              padding: '10px 16px',
              textAlign: 'center',
              borderRadius: 0,
              boxSizing: 'border-box',
              borderWidth: 1,
              borderStyle: 'solid',
              '& fieldset': {
                border: 'none',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.subvariant-grey': {
            fontFamily: manrope.style.fontFamily,
            color: theme.palette.myGrey.grey300,
            opacity: 1,
            fontSize: 14,
            left: '50%',
            transform: 'translate(-50%, 16px) scale(1)',
          },
        },
        shrink: {
          '&.subvariant-grey': {
            left: '0',
            transform: 'translate(0%, -20px) scale(0.96)',
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
          '&.subvariant-furniture': {
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            rowGap: '10px',
            position: 'relative',
            zIndex: 1,
            '& .MuiTypography-root': {
              maxWidth: '180px',
              display: 'flex',
              alignItems: 'flex-start',
            },
            '&:hover .MuiTypography-root': {
              textDecoration: 'underline 4px',
              textDecorationColor: theme.palette.primary.main,
              textUnderlineOffset: '5px',
            },
            '&:has(.Mui-checked) .MuiTypography-root': {
              textDecoration: 'underline 4px',
              textDecorationColor: theme.palette.primary.dark,
              textUnderlineOffset: '5px',
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: theme.palette.black.main,
          padding: 0,
          transition: 'all 0.3s linear',
          '&.Mui-checked': {
            color: theme.palette.black.main,
          },
          '& .MuiTypography-root': {
            background: theme.palette.secondary.contrastText,
            transition: 'all 0.3s linear',
          },
          '&:hover .MuiTypography-root': {
            background: theme.palette.primary.main,
          },
          '&.Mui-checked .MuiTypography-root': {
            background: theme.palette.primary.dark,
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
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: theme.palette.error.main,
          '&.subvariant-centered': {
            textAlign: 'center',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: manrope.style.fontFamily,
          fontStyle: 'normal',
          lineHeight: 'normal',
          color: theme.palette.secondary.contrastText,
          textDecoration: 'underline',
        },
      },
      variants: [
        {
          props: {
            variant: 'm',
          },
          style: {
            fontSize: 20,
            fontWeight: 500,
            textDecoration: 'underline 1px transparent',
            '&:hover': {
              transition: theme.transitions.create([' text-decoration-color ']),
              textDecorationColor: theme.palette.secondary.contrastText,
              textUnderlineOffset: '8px',
            },
          },
        },
        {
          props: {
            variant: 's',
          },
          style: {
            fontSize: 16,
            fontWeight: 400,
          },
        },
        {
          props: {
            variant: 'xs',
          },
          style: {
            fontSize: 14,
            fontWeight: 400,
          },
        },
        {
          props: {
            variant: 'linkButton',
          },
          style: {
            fontSize: 18,
            fontWeight: 400,
            textDecoration: 'none',
          },
        },
        {
          props: {
            variant: 'linkHoverBold',
          },
          style: {
            fontFamily: cabin.style.fontFamily,
            fontSize: 24,
            fontWeight: 400,
            color: theme.palette.black.main,
            textDecoration: 'none',
            '&:hover': {
              fontWeight: 600,
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'default', color: 'primary' },
          style: {
            ...commonButtonStyle,
            color: theme.palette.secondary.contrastText,
          },
        },
        {
          props: { variant: 'default', color: 'secondary' },
          style: {
            ...commonButtonStyle,
            color: theme.palette.black.main,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              color: theme.palette.black.main,
              backgroundColor: theme.palette.primary.dark,
            },
          },
        },
        {
          props: { variant: 'default', size: 'small' },
          style: {
            minWidth: '134px',
            minHeight: '48px',
          },
        },
        {
          props: { variant: 'default', size: 'medium' },
          style: {
            minWidth: '224px',
          },
        },
        {
          props: { variant: 'default', size: 'large' },
          style: {
            minWidth: '302px',
          },
        },
        {
          props: { variant: 'box', color: 'primary' },
          style: {
            ...commonButtonStyle,
            color: theme.palette.black.main,
          },
        },
        {
          props: { variant: 'box', color: 'secondary' },
          style: {
            ...commonButtonStyle,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              color: theme.palette.black.main,
              backgroundColor: theme.palette.primary.dark,
            },
          },
        },
        {
          props: { variant: 'box', size: 'large' },
          style: {
            minWidth: '256px',
            minHeight: '244px',
          },
        },
        {
          props: { variant: 'box', size: 'small' },
          style: {
            minWidth: '44px',
            minHeight: '44px',
            '&.MuiButtonBase-root': {
              borderBottom: 'none',
              flex: '1 1 auto',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
          },
        },
        {
          props: { variant: 'empty' },
          style: {
            width: 'fit-content',
            minWidth: 'fit-content',
            borderRadius: 0,
            backgroundColor: 'transparent',
            padding: '0',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      ],
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: '0px',
          paddingRight: '0px',
          '& .MuiAccordionSummary-content': {
            margin: '20px 0',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: '0px',
          paddingRight: '0px',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fill: 'none',
          backgroundColor: 'transparent',
          width: 54,
          height: 54,
          border: `1px solid ${theme.palette.secondary.contrastText}`,
          stroke: theme.palette.secondary.contrastText,
          '& MuiTypography-root': {
            color: theme.palette.secondary.contrastText,
          },
          '&:hover': {
            transition: theme.transitions.create([
              'background-color',
              'color',
              'stroke',
            ]),
            fill: 'none',
            color: theme.palette.black.main,
            stroke: theme.palette.black.main,
            backgroundColor: theme.palette.secondary.contrastText,
            '& MuiTypography-root': {
              color: theme.palette.black.main,
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '&.layout-menu': {
            '& .MuiPaper-root': {
              borderRadius: '0',
            },
            '& .MuiList-root': {
              padding: '0',
              borderRadius: '0',
            },
            '& .MuiBox-root': {
              width: '148px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              border: `1px solid ${theme.palette.primary.main}`,
              padding: '12px',
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.layout-menu-item': {
            '&.MuiButtonBase-root': {
              padding: '0',
              height: '24px',
              '& span': {
                letterSpacing: '0',
              },
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
          },
          '& em': {
            color: theme.palette.myGrey.grey500,
            fontStyle: 'normal',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          [theme.breakpoints.up('lg')]: {
            maxWidth: '1120px',
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        indicatorColor: 'transparent',
      },
      styleOverrides: {
        root: {
          '&.account': {
            width: '160px',
            '& .MuiTabs-flexContainer': {
              rowGap: '27px',
            },
            '& button.MuiTab-root': {
              padding: '0 8px 0',
              width: 'auto',
              minWidth: 'auto',
              maxWidth: 'min-content',
              whiteSpace: 'nowrap',
              minHeight: 'auto',
              fontFamily: cabin.style.fontFamily,
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '1',
              color: theme.palette.black.main,
              alignItems: 'start',
              '&:hover': {
                fontWeight: '600',
              },
            },
            '& button.MuiTab-root .tab__label': {
              zIndex: '2',
            },
            '& button.Mui-selected': {
              color: theme.palette.black.main,
            },
            '& button .MuiTab-iconWrapper': {
              width: '100%',
              overflow: 'hidden',
              position: 'absolute',
              left: '0px',
              bottom: '-3px',
              marginTop: '0px',
            },
            '& button .MuiTab-iconWrapper path': {
              stroke: theme.palette.secondary.contrastText,
            },
            '& button.Mui-selected .MuiTab-iconWrapper path': {
              stroke: theme.palette.primary.main,
            },
          },
          '&.measurement': {
            color: theme.palette.myGrey.grey400,
            '& .MuiTabs-flexContainer': {
              justifyContent: 'space-between',
            },
            '& button.MuiTab-root': {
              padding: '0',

              width: 'auto',
              minWidth: 'auto',
              maxWidth: 'min-content',
              whiteSpace: 'nowrap',
              minHeight: 'auto',
              fontFamily: cabin.style.fontFamily,
              fontSize: '16px',
              fontWeight: '500',
              lineHeight: 'normal',
            },
            '& button.Mui-selected': {
              color: theme.palette.black.main,
            },
          },
        },
      },
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontFamily: manrope.style.fontFamily,
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: 'normal',
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

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    m: true;
    s: true;
    xs: true;
    linkButton: true;
    linkHoverBold: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    default: true;
    box: true;
    empty: true;
  }
}
