import { ProfileDataForm } from '@/components/Forms/ProfileDataForm/ProfileDataForm';
import { Box, Button, Stack } from '@mui/material';

export const MyProfile = () => {
  return (
    <Stack display="flex">
      <ProfileDataForm />
      <Box marginTop="2.75rem">
        <Button color="secondary" onClick={() => console.log('Delete user')}>
          Удалить профиль
        </Button>
      </Box>
    </Stack>
  );
};
