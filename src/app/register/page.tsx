import { RegistrationForm } from '@/components/Forms/RegistrationForm/RegistrationForm';
import { ServicesLinks } from '@/components/ServicesLinks/ServicesLinks';
import { FormsContainer } from '@/containers/FormsContainer/FormsContainer';
import { Box } from '@mui/material';
import { CustomLink } from '@/components/Link/CustomLink';

const FORM_MINWIDTH = '300px';
const FORM_MAXWIDTH = '460px';

const Register = () => {
  return (
    <FormsContainer padding={7} justifyContent="space-between">
      <Box width="100%" minWidth={FORM_MINWIDTH} maxWidth={FORM_MAXWIDTH}>
        <RegistrationForm />
      </Box>

      <CustomLink href="/login" variant="m">
        Войти в личный кабинет
      </CustomLink>

      <ServicesLinks />
    </FormsContainer>
  );
};

export default Register;
