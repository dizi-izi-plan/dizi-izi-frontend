import React from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { LoginFormType } from '../Forms/LoginForm/validationSchema';

export const TextFieldWrapper = ({
  name,
  control,
  ...props
}: UseControllerProps<LoginFormType> & TextFieldProps) => {
  const { field } = useController({ control, name });

  return <TextField {...field} {...props} />;
};
