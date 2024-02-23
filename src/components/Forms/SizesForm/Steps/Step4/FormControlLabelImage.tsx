import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

type FormControlLabelImageProps = FormControlLabelProps & {
  lableMinHeight?: string;
};

export const FormControlLabelImage = ({
  lableMinHeight,
  ...props
}: FormControlLabelImageProps) => {
  return (
    <Box position="relative">
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
            alignItems: 'flex-end',
          },
          '&:hover + .underline': {
            background: (theme) => theme.palette.primary.main,
          },
          '&:has(.Mui-checked) + .underline': {
            background: (theme) => theme.palette.primary.dark,
          },
        }}
        {...props}
      />
      <Box
        className="underline"
        position="absolute"
        height="8px"
        width="100%"
        left="0"
        bottom="0"
        sx={{
          background: 'transparent',
          transition: 'background 0.3s linear',
        }}
      />
    </Box>
  );
};
