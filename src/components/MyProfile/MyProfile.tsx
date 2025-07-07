'use client';

import { ChangePasswordForm } from '@/components/Forms/ChangePasswordForm/ChangePasswordForm';
import { DeleteUserForm } from '@/components/Forms/DeleteUserForm/DeleteUserForm';
import { ProfileDataForm } from '@/components/Forms/ProfileDataForm/ProfileDataForm';
import { ModalCommonTemplate } from '@/components/Modal/ModalCommonTemplate';
import { modalNames } from '@/helpers/common-constants/modal-constants';
import { Button, Stack } from '@mui/material';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentModal } from '@/redux/slices/modal-slice';
import ModalIcon from '../../../public/assets/icons/modal_icon.svg';

export const MyProfile = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Stack spacing={4}>
        <ProfileDataForm />
        <Button
          color="secondary"
          onClick={() => dispatch(setCurrentModal(modalNames.modalDeleteUser))}
          sx={{ justifyContent: 'start', width: '12rem' }}
        >
          Удалить профиль
        </Button>
      </Stack>
      <ModalCommonTemplate
        modalName={modalNames.modalChangePassword}
        text={['']}
      >
        <ChangePasswordForm />
      </ModalCommonTemplate>
      <ModalCommonTemplate
        modalName={modalNames.modalDeleteUser}
        text={['']}
        icon={<ModalIcon width="75" height="126" />}
      >
        <DeleteUserForm />
      </ModalCommonTemplate>
    </>
  );
};
