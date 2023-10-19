import React from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

export type ControlledInputProps<T extends FieldValues> = TextFieldProps &
  UseControllerProps<T> & {
    errorMessage?: string;
  };

export const TextFieldWrapper = <T extends FieldValues>({
  name,
  control,
  errorMessage,
  ...props
}: ControlledInputProps<T>) => {
  const { field } = useController<T>({ control, name });

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
