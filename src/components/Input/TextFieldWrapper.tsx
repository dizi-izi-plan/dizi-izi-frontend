import { ChangeEvent } from 'react';
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
    min?: number;
    max?: number;
    onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  };

export const TextFieldWrapper = <T extends FieldValues>({
  name,
  control,
  errorMessage,
  onChangeHandler,
  ...props
}: ControlledInputProps<T>) => {
  const { field } = useController<T>({ control, name });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (props.type === 'number') {
      if (props.max && value.length <= props.max) {
        field.onChange(value);
      }
    } else {
      field.onChange(value);
    }
    if (onChangeHandler) onChangeHandler(e);
  };

  return (
    <Box>
      <TextField {...field} {...props} onChange={onChange} />
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
