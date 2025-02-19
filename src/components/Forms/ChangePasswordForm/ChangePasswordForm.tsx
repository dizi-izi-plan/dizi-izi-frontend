'use client';

import { InputPasswordWrapper } from '@/components/Input/InputPassword/InputPasswordWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/redux/hooks';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSetNewPasswordMutation } from '@/redux/slices/user-slice';
import CircularProgress from '@mui/material/CircularProgress';
import { setSnackbar, setCurrentModal } from '@/redux/slices/modal-slice';
import { TNewPasswordError } from '@/types/api-types';
import { getPasswordConfig } from './changePassword.data';
import { CHANGE_PASSWORD_FORM_DATA } from './changePasswordFormConstants';
import {
  ChangePasswordFormType,
  ChangePasswordFormValidation,
} from './validationSchema';

export const ChangePasswordForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ChangePasswordFormType>({
    defaultValues: {
      [CHANGE_PASSWORD_FORM_DATA.oldPassword]: '',
      [CHANGE_PASSWORD_FORM_DATA.password]: '',
      [CHANGE_PASSWORD_FORM_DATA.confirmPassword]: '',
    },
    resolver: zodResolver(ChangePasswordFormValidation),
  });
  const [setNewPassword, { isLoading }] = useSetNewPasswordMutation();
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async (passwordData) => {
    try {
      await setNewPassword({
        current_password: passwordData.oldPassword,
        new_password: passwordData.password,
      }).unwrap();
      dispatch(
        setSnackbar({
          isOpen: true,
          message: 'Пароль успешно изменен',
          severity: 'success',
        }),
      );
      dispatch(setCurrentModal(null));
    } catch (error) {
      const { data, status } = error as TNewPasswordError;
      if (status === 400 && data) {
        if (data.current_password) {
          setError(CHANGE_PASSWORD_FORM_DATA.oldPassword, {
            type: 'server',
            message: data.current_password[0],
          });
        }
        if (data.new_password) {
          setError(CHANGE_PASSWORD_FORM_DATA.password, {
            type: 'server',
            message: data.new_password[0],
          });
        }
      } else {
        dispatch(
          setSnackbar({
            isOpen: true,
            message: 'Что-то пошло не так, попробуйте еще раз',
            severity: 'error',
          }),
        );
      }
    }
  });
  const passwordConfig = getPasswordConfig(control, errors);

  return (
    <Stack spacing={5}>
      <Typography fontSize={32} fontWeight={500}>
        Смена пароля
      </Typography>
      <form onSubmit={onSubmit}>
        <Stack spacing={4} width="25rem">
          {passwordConfig.map(
            ({
              name,
              // eslint-disable-next-line @typescript-eslint/no-shadow
              control,
              label,
              placeholder,
              className,
              errorMessage,
            }) => (
              <InputPasswordWrapper
                key={name}
                name={name}
                control={control}
                label={label}
                placeholder={placeholder}
                className={className}
                errorMessage={errorMessage}
              />
            ),
          )}
          <Box display="flex" justifyContent="center">
            <Button
              variant="default"
              size="medium"
              color="secondary"
              type="submit"
            >
              {isLoading ? <CircularProgress color="inherit" /> : 'Сохранить'}
            </Button>
          </Box>
        </Stack>
      </form>
    </Stack>
  );
};
