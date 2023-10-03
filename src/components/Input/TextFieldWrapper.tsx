import React from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { LoginFormType } from '../Forms/LoginForm/validationSchema';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { ResetPasswordType } from '../Forms/ResetPasswordForm/validationSchema';

type TextFieldWrapperProps = UseControllerProps<
  LoginFormType | ResetPasswordType
> &
  TextFieldProps & {
    errorMessage?: string;
  };

export const TextFieldWrapper = ({
  name,
  control,
  errorMessage,
  ...props
}: TextFieldWrapperProps) => {
  const { field } = useController({ control, name });

  return (
    <Box>
      <TextField {...field} {...props} />
      <FormHelperText
        sx={{
          color: 'error.main',
        }}
      >
        {errorMessage}
      </FormHelperText>
    </Box>
  );
};
