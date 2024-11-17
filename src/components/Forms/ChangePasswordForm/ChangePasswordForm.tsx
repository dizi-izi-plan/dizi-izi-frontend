'use client';

import { InputPasswordWrapper } from '@/components/Input/InputPassword/InputPasswordWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
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
    formState: { errors },
  } = useForm<ChangePasswordFormType>({
    mode: 'onChange',
    defaultValues: {
      [CHANGE_PASSWORD_FORM_DATA.oldPassword]: '',
      [CHANGE_PASSWORD_FORM_DATA.password]: '',
      [CHANGE_PASSWORD_FORM_DATA.confirmPassword]: '',
    },
    resolver: zodResolver(ChangePasswordFormValidation),
  });

  const onSubmit = handleSubmit((data) => console.log(data.password));
  const passwordConfig = getPasswordConfig(control, errors);

  return (
    <Stack spacing={5} display={'flex'} alignItems={'left'}>
      <Typography fontSize={32} fontWeight={500}>
        Смена пароля
      </Typography>
      <form onSubmit={onSubmit}>
        <Stack spacing={4} width={'25rem'} display={'flex'}>
          {passwordConfig.map(
            ({
              name,
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
          <Box display={'flex'} justifyContent={'center'}>
            <Button
              variant="default"
              size="medium"
              color="secondary"
              type="submit"
            >
              Сохранить
            </Button>
          </Box>
        </Stack>
      </form>
    </Stack>
  );
};
