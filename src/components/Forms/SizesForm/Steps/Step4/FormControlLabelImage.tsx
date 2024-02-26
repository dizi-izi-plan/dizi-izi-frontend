import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

type FormControlLabelImageProps = FormControlLabelProps & {
  lableMinHeight?: string;
};

export const FormControlLabelImage = ({
  lableMinHeight,
  ...props
}: FormControlLabelImageProps) => {
  return (
    <FormControlLabel
      sx={{
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
          minHeight: lableMinHeight,
          display: 'flex',
          alignItems: 'flex-start',
        },
        '&:hover .MuiTypography-root': {
          textDecoration: 'underline 4px',
          textDecorationColor: (theme) => theme.palette.primary.main,
          textUnderlineOffset: '5px',
        },
        '&:has(.Mui-checked) .MuiTypography-root': {
          textDecoration: 'underline 4px',
          textDecorationColor: (theme) => theme.palette.primary.dark,
          textUnderlineOffset: '5px',
        },
      }}
      {...props}
    />
  );
};
