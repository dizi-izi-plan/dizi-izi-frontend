'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { CLASS_NAMES_INPUT } from './classNameConstants';
import Button from '@mui/material/Button';
import { InputPassword } from './InputPassword/InputPassword';
import { ControllerWrapper } from './ControllerWrapper';
import TextField from '@mui/material/TextField';

export type FormValues = {
  login: string;
  password: string;
};

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      login: '',
      password: '',
    },
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      {/* <Controller
        render={({ field }) => (
          <TextField
            {...field}
            className={CLASS_NAMES_INPUT.dark}
            label={`Логин`}
          />
        )}
        control={control}
        name="login"
      /> */}

      <ControllerWrapper
        fieldComponent={TextField}
        name="login"
        control={control}
        className={CLASS_NAMES_INPUT.dark}
        label={`Логин`}
      />

      <ControllerWrapper
        fieldComponent={InputPassword}
        name="password"
        control={control}
        className={CLASS_NAMES_INPUT.dark}
        label={`Пароль`}
      />

      <Button variant="default" size="large" type="submit">
        Войти в личный кабинет
      </Button>
    </form>
  );
};
