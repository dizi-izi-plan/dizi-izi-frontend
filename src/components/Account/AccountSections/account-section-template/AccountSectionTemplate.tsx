import { ProfileDataForm } from '@/components/Forms/ProfileDataForm/ProfileDataForm';
import { useDeleteUserMutation } from '@/redux/slices/deleteUser-slice';
import { Box, Button, Stack } from '@mui/material';

export const AccountSectionTemplate = () => {
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      await deleteUser({}).unwrap();
      console.log('User deleted');
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  return (
    <Stack>
      <ProfileDataForm />
      <Box paddingTop={18}>
        <Button color="secondary" onClick={handleDelete}>
          Удалить профиль
        </Button>
      </Box>
    </Stack>
  );
};
