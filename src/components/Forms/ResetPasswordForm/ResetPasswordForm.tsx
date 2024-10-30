'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter, useParams } from 'next/navigation';
import { CLASS_NAMES_INPUT } from '../../Input/classNameConstants';
import Button from '@mui/material/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {
  ConfirmPasswordValidation,
  confirmPasswordFormType,
} from '@/helpers/validation/validationTemplates';
import { InputPasswordWrapper } from '@/components/Input/InputPassword/InputPasswordWrapper';
import { useResetPasswordConfirmMutation } from '@/redux/slices/auth-slice';

const RESET_PASSWORD_FORM_NAMES = {
  password: 'password',
  re_password: 're_password',
} as const;

const RESET_PASSWORD_FORM_LABELS = {
  password: 'Пароль',
  re_password: 'Повторите пароль',
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
  const router = useRouter();
  const [confirmResetPassword, { isLoading }] =
    useResetPasswordConfirmMutation();
  const params = useParams<{ uid: string; token: string }>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await confirmResetPassword({
        uid: params?.uid,
        token: params?.token,
        new_password: data.password,
      })
        .unwrap()
        .then(() => localStorage.removeItem('email'));
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  });

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
              name={RESET_PASSWORD_FORM_NAMES.re_password}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={RESET_PASSWORD_FORM_LABELS.re_password}
              errorMessage={
                errors.re_password ? errors.re_password?.message : ' '
              }
            />
          </Stack>
        </Stack>

        <Stack spacing={4} alignItems="center">
          <Box>
            <Button variant="default" size="large" type="submit">
              {isLoading ? <CircularProgress color="inherit" /> : 'Подтвердить'}
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  );
};
