import { ChangePasswordForm } from '@/components/Forms/ChangePasswordForm/ChangePasswordForm';
import { ProfileDataForm } from '@/components/Forms/ProfileDataForm/ProfileDataForm';
import { ModalCommonTemplate } from '@/components/Modal/ModalCommonTemplate';
import { modalNames } from '@/helpers/common-constants/modal-constants';
import { Button, Stack } from '@mui/material';

export const MyProfile = () => {
  return (
    <>
      <Stack spacing={4}>
        <ProfileDataForm />
        <Button
          color="secondary"
          onClick={() => console.log('Delete user')}
          sx={{ justifyContent: 'start' }}
        >
          Удалить профиль
        </Button>
      </Stack>
      <ModalCommonTemplate
        modalName={modalNames.modalChangePassword}
        text={['']}
        style={{ width: '28rem' }}
      >
        <ChangePasswordForm />
      </ModalCommonTemplate>
    </>
  );
};
