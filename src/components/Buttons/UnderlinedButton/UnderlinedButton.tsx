import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';

type UnderlinedButtonProps = ButtonProps & {
  text: string;
};

export const UnderlinedButton = ({ text, ...props }: UnderlinedButtonProps) => {
  return (
    <Button
      variant="empty"
      sx={{
        position: 'relative',
        '& .underline': {
          opacity: 0,
        },
        '&:hover .underline': {
          opacity: 1,
        },
      }}
      {...props}
      disableRipple
    >
      <Box component="span" zIndex={1} whiteSpace="nowrap">
        {text}
      </Box>
      <Box
        className="underline"
        position="absolute"
        height="8px"
        width="100%"
        left="0"
        bottom="0"
        sx={{
          backgroundColor: 'primary.main',
          transition: 'opacity 0.3s linear',
        }}
      />
    </Button>
  );
};
