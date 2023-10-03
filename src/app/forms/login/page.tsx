import { LoginForm } from '@/components/Forms/LoginForm/LoginForm';
import { ServicesLinks } from '@/components/ServicesLinks/ServicesLinks';
import { Box, Stack } from '@mui/material';

const FORM_MINWIDTH = '300px';
const FORM_MAXWIDTH = '460px';

const Login = () => {
  return (
    <Stack
      minHeight="calc(100vh - 90px)"
      alignItems="center"
      pt={14}
      pb={10}
      sx={{ backgroundColor: 'primary.contrastText' }}
      justifyContent="space-between"
    >
      <Box width="100%" minWidth={FORM_MINWIDTH} maxWidth={FORM_MAXWIDTH}>
        <LoginForm />
      </Box>
      <ServicesLinks />
    </Stack>
  );
};

export default Login;
