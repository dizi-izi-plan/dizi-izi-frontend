import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';

import {
  UseControllerProps,
  useController,
  FieldValues,
} from 'react-hook-form';

type Option = {
  value: string | number;
  text: string | number;
  key: string | number;
};

type Options = Option[];

export type ControlledSelectProps<T extends FieldValues> = SelectProps &
  UseControllerProps<T> & {
    options: Options;
    labelText: string;
  };

export const SelectWrapper = <T extends FieldValues>({
  name,
  control,
  labelText,
  options,
  className,
  ...props
}: ControlledSelectProps<T>) => {
  const { field } = useController({ name, control });

  return (
    <FormControl>
      <InputLabel id={labelText} className={className}>
        {labelText}
      </InputLabel>
      <Select
        {...field}
        {...props}
        className={className}
        labelId={labelText}
        onChange={(value) => {
          field.onChange(value);
        }}
      >
        {options.map(({ value, text }, indx) => (
          <MenuItem key={indx} value={value}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
