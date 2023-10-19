'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { CLASS_NAMES_INPUT } from '../../Input/classNameConstants';
import Button from '@mui/material/Button';
import { TextFieldWrapper } from '../../Input/TextFieldWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  LoginValidation,
  LoginFormType,
} from '@/helpers/validation/validationTemplates';

const ENTER_EMAIL_FORM_NAMES = {
  login: 'login',
} as const;

const ENTER_EMAIL_FORM_LABELS = {
  email: 'Почта',
} as const;

export const EnterEmailForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: {
      login: '',
    },
    resolver: zodResolver(LoginValidation),
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
          Введите почту, которая привязана к личному кабинету
        </Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <Stack spacing={3} mb={4}>
          <Stack rowGap={6}>
            <TextFieldWrapper
              name={ENTER_EMAIL_FORM_NAMES.login}
              control={control}
              className={CLASS_NAMES_INPUT.dark}
              label={ENTER_EMAIL_FORM_LABELS.email}
              errorMessage={errors.login ? errors.login?.message : ' '}
            />
          </Stack>
        </Stack>

        <Stack spacing={4} alignItems="center">
          <Box>
            <Button variant="default" size="large" type="submit">
              Получить код
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  );
};
