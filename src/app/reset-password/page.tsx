import { ResetPasswordForm } from '@/components/Forms/ResetPasswordForm/ResetPasswordForm';
import { FormsContainer } from '@/containers/FormsContainer/FormsContainer';
import { Box } from '@mui/material';

const FORM_MINWIDTH = '300px';
const FORM_MAXWIDTH = '460px';

const ResetPassword = () => {
  return (
    <FormsContainer padding={14}>
      <Box width="100%" minWidth={FORM_MINWIDTH} maxWidth={FORM_MAXWIDTH}>
        <ResetPasswordForm />
      </Box>
    </FormsContainer>
  );
};

export default ResetPassword;
