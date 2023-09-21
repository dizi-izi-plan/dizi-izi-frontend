import React from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import { InputPassword, InputPasswordProps } from './InputPassword';
import { LoginFormType } from '@/components/Forms/LoginForm/validationSchema';

export const InputPasswordWrapper = (
  props: UseControllerProps<LoginFormType> & InputPasswordProps,
) => {
  const { field } = useController(props);

  return <InputPassword {...field} {...props} />;
};
