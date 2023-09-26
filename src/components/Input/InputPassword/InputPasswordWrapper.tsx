import React from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import { InputPassword, InputPasswordProps } from './InputPassword';
import { LoginFormType } from '@/components/Forms/LoginForm/validationSchema';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

export const InputPasswordWrapper = (
  props: UseControllerProps<LoginFormType> & InputPasswordProps,
) => {
  const { field } = useController(props);

  return (
    <Box>
      <InputPassword {...field} {...props} />
      <FormHelperText
        sx={{
          color: 'error.main',
        }}
      >
        {props.errorMessage}
      </FormHelperText>
    </Box>
  );
};
