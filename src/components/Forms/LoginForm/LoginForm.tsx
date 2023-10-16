'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { CLASS_NAMES_INPUT } from '../../Input/classNameConstants';
import Button from '@mui/material/Button';
import { TextFieldWrapper } from '../../Input/TextFieldWrapper';
import { InputPasswordWrapper } from '../../Input/InputPassword/InputPasswordWrapper';
import { LOGIN_FORM_LABELS, LOGIN_FORM_NAMES } from './loginFormConstants';
import { LoginFormType, LoginFormValidation } from './validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: {
      [LOGIN_FORM_NAMES.login]: '',
      [LOGIN_FORM_NAMES.password]: '',
    },
    resolver: zodResolver(LoginFormValidation),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <Box mb={10}>
        <Typography
          textAlign="center"
          variant="h2"
          color="secondary.contrastText"
        >
          Добро пожаловать в Dizi IZI!
        </Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <Stack spacing={3} mb={4}>
          <Stack rowGap={4}>
            <TextFieldWrapper
              name={LOGIN_FORM_NAMES.login}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={LOGIN_FORM_LABELS.login}
              errorMessage={errors.login ? errors.login?.message : ' '}
            />
            <InputPasswordWrapper
              name={LOGIN_FORM_NAMES.password}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={LOGIN_FORM_LABELS.password}
              errorMessage={errors.password ? errors.password?.message : ' '}
            />
          </Stack>
          <Link href="enter-email" variant="s">
            Забыли пароль?
          </Link>
        </Stack>

        <Stack spacing={4} alignItems="center">
          <Box>
            <Button variant="default" size="large" type="submit">
              Войти в личный кабинет
            </Button>
          </Box>
          <Link href="register" variant="linkButton">
            Регистрация
          </Link>
        </Stack>
      </form>
    </div>
  );
};
