'use client';
import { InputVariant } from '@/components/Input/classNameConstants';
import { FormHelperText } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type LocalDatePickerProps<T> = DatePickerProps<T> & {
  className: InputVariant;
};

export type ControlledInputProps<T extends FieldValues> =
  LocalDatePickerProps<T> &
    UseControllerProps<T> & {
      errorMessage?: string;
      onChange?: (value: dayjs.Dayjs | null) => void;
    };

/**
 * @param value Dayjs | null
 */

export const LocalDatePickerWrapper = <T extends FieldValues>(
  props: ControlledInputProps<T>,
) => {
  const { field } = useController(props);

  const value = field.value ? (dayjs(field.value) as unknown as T) : null;

  const handleChange = (newValue: T | null, context: any) => {
    const formattedValue = newValue
      ? dayjs(newValue as any).format('YYYY-MM-DD')
      : null;
    field.onChange(formattedValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker {...props} {...field} onChange={handleChange} value={value} />
      <FormHelperText>{props.errorMessage}</FormHelperText>
    </LocalizationProvider>
  );
};
