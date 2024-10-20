import { ProfileDataForm } from '@/components/Forms/ProfileDataForm/ProfileDataForm';
import { Box, Button, Stack } from '@mui/material';

export const AccountSectionTemplate = () => {
  return (
    <Stack>
      <ProfileDataForm />
      <Box paddingTop={18}>
        <Button color="secondary" onClick={() => console.log('Delete user')}>
          Удалить профиль
        </Button>
      </Box>
    </Stack>
  );
};
