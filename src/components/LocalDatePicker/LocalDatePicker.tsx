'use client';
import React from 'react';
import 'dayjs/locale/ru';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { InputVariant } from '@/components/Input/classNameConstants';

type LocalDatePickerProps<T> = DatePickerProps<T> & {
  className: InputVariant;
};

/**
 * @param value Dayjs | null
 */

export const LocalDatePicker: React.FC<LocalDatePickerProps<Date>> = ({
  className,
  ...props
}) => {
  const { value, onChange } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker
        label="Дата рождения"
        className={className}
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};
