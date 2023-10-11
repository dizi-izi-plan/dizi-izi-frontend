import { EnterEmailForm } from '@/components/Forms/EnterEmailForm/EnterEmailForm';
import { FormsContainer } from '@/containers/FormsContainer/FormsContainer';
import { Box } from '@mui/material';

const FORM_MINWIDTH = '300px';
const FORM_MAXWIDTH = '460px';

const EnterEmail = () => {
  return (
    <FormsContainer padding={14}>
      <Box width="100%" minWidth={FORM_MINWIDTH} maxWidth={FORM_MAXWIDTH}>
        <EnterEmailForm />
      </Box>
    </FormsContainer>
  );
};

export default EnterEmail;
