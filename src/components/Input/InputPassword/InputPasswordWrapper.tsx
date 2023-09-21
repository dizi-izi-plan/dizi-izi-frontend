import React from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import { InputPassword, InputPasswordProps } from './InputPassword';
import { FormValues } from '@/components/Forms/LoginForm';

export const InputPasswordWrapper = (
  props: UseControllerProps<FormValues> & InputPasswordProps,
) => {
  const { field } = useController(props);

  return <InputPassword {...field} {...props} />;
};
