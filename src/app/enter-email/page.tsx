import { EnterEmailForm } from '@/components/Forms/EnterEmailForm/EnterEmailForm';
import { Box, Stack } from '@mui/material';

const FORM_MINWIDTH = '300px';
const FORM_MAXWIDTH = '460px';

//TODO: CHANGE STACK TO REUSED COMPONENT CONTAINER
const EnterEmail = () => {
  return (
    <Stack
      minHeight="calc(100vh - 90px)"
      alignItems="center"
      p={14}
      sx={{ backgroundColor: 'primary.contrastText' }}
    >
      <Box width="100%" minWidth={FORM_MINWIDTH} maxWidth={FORM_MAXWIDTH}>
        <EnterEmailForm />
      </Box>
    </Stack>
  );
};

export default EnterEmail;
