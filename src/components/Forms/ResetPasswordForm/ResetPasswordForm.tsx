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
  PasswordValidation,
  passwordFormType,
} from '@/helpers/validation/validationTemplates';
import { InputPasswordWrapper } from '@/components/Input/InputPassword/InputPasswordWrapper';

const RESET_PASSWORD_FORM_NAMES = {
  password: 'password',
} as const;

const RESET_PASSWORD_FORM_LABELS = {
  password: 'Новый пароль',
} as const;

export const ResetPasswordForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<passwordFormType>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(PasswordValidation),
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
          </Stack>
        </Stack>

        <Stack spacing={4} alignItems="center">
          <Box>
            <Button variant="default" size="large" type="submit">
              Подтверить
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  );
};
