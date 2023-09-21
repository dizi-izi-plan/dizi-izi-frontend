import React from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import { FormValues } from '../Forms/LoginForm';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export const TextFieldWrapper = ({
  name,
  control,
  ...props
}: UseControllerProps<FormValues> & TextFieldProps) => {
  const { field } = useController({ control, name });

  return <TextField {...field} {...props} />;
};
