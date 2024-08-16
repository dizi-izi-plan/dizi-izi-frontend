'use client';

import React, { useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { CLASS_NAMES_INPUT } from '../../Input/classNameConstants';
import Button from '@mui/material/Button';
import { TextFieldWrapper } from '../../Input/TextFieldWrapper';
import { InputPasswordWrapper } from '../../Input/InputPassword/InputPasswordWrapper';
import { LOGIN_FORM_LABELS, LOGIN_FORM_NAMES } from './loginFormConstants';
import { LoginFormType, LoginFormValidation } from './validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { CustomLink } from '@/components/Link/CustomLink';
import { useLoginMutation } from '@/redux/slices/auth-slice';
import { TLoginError } from '@/types/api-types';
import { routes } from '@/helpers/common-constants/routes-constants';
import { useAuth } from '@/hooks/useAuth';

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
  const isAuth = useAuth();

  const [fetchlogin] = useLoginMutation();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await fetchlogin(data).unwrap();
      router.push(routes.personalAccount);
    } catch (error) {
      const currentError = error as TLoginError;
      if (currentError.data?.non_field_errors[0]) {
        fieldsArr.forEach((field) => {
          setError(field, {
            type: 'custom',
            message: currentError.data.non_field_errors[0],
          });
        });
      }
    }
  });

  useLayoutEffect(() => {
    if (isAuth) router.push(routes.personalAccount);
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
          <CustomLink href={routes.authRoutes.enterEmail} variant="s">
            Забыли пароль?
          </CustomLink>
        </Stack>

        <Stack spacing={4} alignItems="center">
          <Box>
            <Button variant="default" size="large" type="submit">
              Войти в личный кабинет
            </Button>
          </Box>
          <CustomLink href={routes.authRoutes.register} variant="linkButton">
            Регистрация
          </CustomLink>
        </Stack>
      </form>
    </div>
  );
};
