import { ProfileDataForm } from '@/components/Forms/ProfileDataForm/ProfileDataForm';
import { Box, Button, Stack } from '@mui/material';

export const AccountSectionTemplate = () => {
  return (
    <Stack>
      <ProfileDataForm />
      <Box paddingTop={18}>
        <Button
          color="secondary"
          onClick={() => console.log('Удалить профиль')}
        >
          Удалить профиль
        </Button>
      </Box>
    </Stack>
  );
};
