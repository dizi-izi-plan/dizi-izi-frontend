import { forwardRef, Ref } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const COOKIE_MODAL_ID = 'server-modal-description';

type CookieModalContentProps = {
  onClose: () => void;
};

const CookieModalContent = (
  { onClose }: CookieModalContentProps,
  ref: Ref<HTMLInputElement>,
) => {
  const handleOkayClick = () => {
    onClose();
  };

  return (
    <div ref={ref}>
      <Stack
        sx={{
          position: 'relative',
          maxWidth: 275,
          bgcolor: 'secondary.contrastText',
          p: 2,
        }}
      >
        <Typography
          id="COOKIE_MODAL_ID"
          variant="caption"
          color="black.main"
          sx={{ pt: 1, pb: 2 }}
        >
          Мы используем файлы cookie, чтобы вам было удобнее пользоваться нашим
          сайтом. Продолжая пользоваться сайтом, вы соглашаетесь с
          использованием нами файлов cookies.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleOkayClick}
          sx={{ borderRadius: 0 }}
        >
          xорошо
        </Button>
      </Stack>
    </div>
  );
};

export const CookieContent = forwardRef(CookieModalContent);
