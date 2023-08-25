'use client';
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ru';
import { InputVariant } from '@/components/Input/classNameConstants';

type LocalDatePickerProps<T> = DatePickerProps<T> & {
  className: InputVariant;
};

export const LocalDatePicker: React.FC<LocalDatePickerProps<Date>> = ({
  className,
  ...props
}) => {
  //   const [value, setValue] = useState<Dayjs | null>(null); в стейте родительского компонента использовать эти типы данных
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker
        label="Дата рождения"
        className={className}
        value={props.value}
        onChange={props.onChange}
      />
    </LocalizationProvider>
  );
};
