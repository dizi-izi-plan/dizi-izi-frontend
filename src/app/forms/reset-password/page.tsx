import { ResetPasswordForm } from '@/components/Forms/ResetPasswordForm/ResetPasswordForm';
import { Box, Stack } from '@mui/material';

const FORM_MINWIDTH = '300px';
const FORM_MAXWIDTH = '460px';

const ResetPassword = () => {
  return (
    <Stack
      minHeight="calc(100vh - 90px)"
      alignItems="center"
      p={14}
      sx={{ backgroundColor: 'primary.contrastText' }}
    >
      <Box width="100%" minWidth={FORM_MINWIDTH} maxWidth={FORM_MAXWIDTH}>
        <ResetPasswordForm />
      </Box>
    </Stack>
  );
};

export default ResetPassword;
