import React from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import { InputPassword, InputPasswordProps } from './InputPassword';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

export type ControlledInputProps<T extends FieldValues> = InputPasswordProps &
  UseControllerProps<T> & {
    errorMessage?: string;
  };

export const InputPasswordWrapper = <T extends FieldValues>(
  props: ControlledInputProps<T>,
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
