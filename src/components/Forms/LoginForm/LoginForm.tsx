'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
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
import { useLoginMutation } from '@/redux/slices/api-slice';
import { TLoginError } from '@/types/api-types';
import { selectIsAuth } from '@/redux/slices/user-slice';

const fieldsArr = [LOGIN_FORM_NAMES.email, LOGIN_FORM_NAMES.password];

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<LoginFormType>({
    defaultValues: {
      [LOGIN_FORM_NAMES.email]: '',
      [LOGIN_FORM_NAMES.password]: '',
    },
    resolver: zodResolver(LoginFormValidation),
  });
  const router = useRouter();
  const isAuth = useAppSelector(selectIsAuth);

  const [fetchlogin, { error, isError, isSuccess }] = useLoginMutation();

  const onSubmit = handleSubmit(async (data) => {
    await fetchlogin(data).unwrap();
  });

  useEffect(() => {
    const currentError = error as TLoginError;
    if (isError && currentError.data.non_field_errors[0]) {
      fieldsArr.forEach((field) => {
        const currentError = error as TLoginError;
        setError(field, {
          type: 'custom',
          message: currentError.data.non_field_errors[0],
        });
      });
    } else if (isSuccess) {
      router.push('/personal-account');
    }
  }, [isError, error, setError, isSuccess, router]);

  useEffect(() => {
    if (isAuth) router.push('/personal-account');
  }, [isAuth, router]);

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
              name={LOGIN_FORM_NAMES.email}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={LOGIN_FORM_LABELS.email}
              errorMessage={errors.email ? errors.email?.message : ' '}
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
