import React from 'react';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import Box from '@mui/material/Stack';
import FormHelperText from '@mui/material/FormHelperText';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

export type ControlledInputProps<T extends FieldValues> = RadioGroupProps &
  UseControllerProps<T> & {
    errorMessage?: string;
  };

export const RadioGroupWrapper = <T extends FieldValues>(
  props: ControlledInputProps<T>,
) => {
  const { field } = useController(props);

  return (
    <Box>
      <RadioGroup {...field} {...props} />
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
