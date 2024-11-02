'use client';

import { modalNames } from '@/helpers/common-constants/modal-constants';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentModal } from '@/redux/slices/modal-slice';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ChangePasswordForm } from '../ChangePasswordForm/ChangePasswordForm';
import { PROFILE_FORM_DATA } from './ProfileDataFormConstats';
import { IProfileFormInput } from './profileDataFormDataTypes';
import { getProfileConfig } from './profileFormData.data';
import { AccountFormType, AccountFormValidation } from './validationSchema';

export const ProfileDataForm = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFormType>({
    mode: 'onSubmit',
    defaultValues: {
      [PROFILE_FORM_DATA.username]: 'Елена',
      [PROFILE_FORM_DATA.status]: true,
      [PROFILE_FORM_DATA.birthday]: '2010-10-10',
      [PROFILE_FORM_DATA.city]: 'Москва',
    },
    resolver: zodResolver(AccountFormValidation),
  });

  const onSubmit = handleSubmit((data) => console.log(data));
  const profileConfig = getProfileConfig(control, errors);

  return (
    <Stack spacing={6}>
      <Typography fontSize={32} fontWeight={500}>
        Основные данные
      </Typography>
      <Box width="25rem">
        <form onSubmit={onSubmit}>
          <Stack spacing={4}>
            {profileConfig.map((formField) => formField)}
          </Stack>
          <Button
            color="secondary"
            onClick={() =>
              dispatch(setCurrentModal(modalNames.modalChangePassword))
            }
            sx={{ marginTop: '1rem' }}
          >
            Изменить пароль
          </Button>
          <Button
            type="submit"
            variant="default"
            size="medium"
            color="secondary"
            sx={{ marginTop: '2.5rem' }}
          >
            Сохранить
          </Button>
        </form>
      </Box>
    </Stack>
  );
};
