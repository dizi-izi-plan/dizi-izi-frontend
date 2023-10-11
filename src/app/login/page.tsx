import { LoginForm } from '@/components/Forms/LoginForm/LoginForm';
import { ServicesLinks } from '@/components/ServicesLinks/ServicesLinks';
import { FormsContainer } from '@/containers/FormsContainer/FormsContainer';
import { Box } from '@mui/material';

const FORM_MINWIDTH = '300px';
const FORM_MAXWIDTH = '460px';

const Login = () => {
  return (
    <FormsContainer padding={7} justifyContent="space-between">
      <Box width="100%" minWidth={FORM_MINWIDTH} maxWidth={FORM_MAXWIDTH}>
        <LoginForm />
      </Box>
      <ServicesLinks />
    </FormsContainer>
  );
};

export default Login;
