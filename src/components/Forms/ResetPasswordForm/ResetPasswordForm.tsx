'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { CLASS_NAMES_INPUT } from '../../Input/classNameConstants';
import Button from '@mui/material/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  ConfirmPasswordValidation,
  confirmPasswordFormType,
} from '@/helpers/validation/validationTemplates';
import { InputPasswordWrapper } from '@/components/Input/InputPassword/InputPasswordWrapper';

const RESET_PASSWORD_FORM_NAMES = {
  password: 'password',
  confirmPassword: 'confirmPassword',
} as const;

const RESET_PASSWORD_FORM_LABELS = {
  password: 'Пароль',
  confirmPassword: 'Повторите пароль',
} as const;

export const ResetPasswordForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<confirmPasswordFormType>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(ConfirmPasswordValidation),
  });

  //TODO: add onSubmit listener
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <Box mb="80px">
        <Typography
          textAlign="center"
          variant="h3"
          color="secondary.contrastText"
        >
          Введите новый пароль
        </Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <Stack spacing={3} mb={4}>
          <Stack rowGap={6}>
            <InputPasswordWrapper
              name={RESET_PASSWORD_FORM_NAMES.password}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={RESET_PASSWORD_FORM_LABELS.password}
              errorMessage={errors.password ? errors.password?.message : ' '}
            />
            <InputPasswordWrapper
              name={RESET_PASSWORD_FORM_NAMES.confirmPassword}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={RESET_PASSWORD_FORM_LABELS.confirmPassword}
              errorMessage={
                errors.confirmPassword ? errors.confirmPassword?.message : ' '
              }
            />
          </Stack>
        </Stack>

        <Stack spacing={4} alignItems="center">
          <Box>
            <Button variant="default" size="large" type="submit">
              Подтвердить
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  );
};
