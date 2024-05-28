import React from 'react';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import Box from '@mui/material/Stack';
import FormHelperText from '@mui/material/FormHelperText';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

export type ControlledInputProps<T extends FieldValues> = CheckboxProps &
  UseControllerProps<T> & {
    errorMessage?: string;
  };

export const CheckboxWrapper = <T extends FieldValues>(
  props: ControlledInputProps<T>,
) => {
  const { field } = useController(props);

  return (
    <Box>
      <Checkbox {...field} {...props} />
      <FormHelperText>{props.errorMessage}</FormHelperText>
    </Box>
  );
};
