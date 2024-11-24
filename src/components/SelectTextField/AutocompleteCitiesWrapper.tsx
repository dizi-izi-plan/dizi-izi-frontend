// 'use client'; - на будущее, необходимо проверить перед использованием, как работает

import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { InputVariant } from '@/components/Input/classNameConstants';
import { useGetCitiesQuery } from '@/redux/slices/cities-slice';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type SelectTextFieldProps = TextFieldProps & {
  className: InputVariant;
  placeholder: string;
};

export type SelectInputProps<T extends FieldValues> = SelectTextFieldProps &
  UseControllerProps<T>;

export const AutocompleteCitiesWrapper = <T extends FieldValues>(
  props: SelectInputProps<T>,
) => {
  const { field } = useController(props);

  const { data = [] } = useGetCitiesQuery('');

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: string) => option,
  });

  return (
    <Autocomplete
      {...field}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      disablePortal
      noOptionsText={data.length ? 'Город не найден' : 'Идет загрузка...'}
      options={data}
      filterOptions={filterOptions}
      onChange={(_, value) => {
        field.onChange(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          placeholder={props.placeholder}
          className={props.className}
          InputLabelProps={{ shrink: true }}
          sx={{
            '& .MuiAutocomplete-input': {
              padding: '16px 16px',
            },
          }}
        />
      )}
    />
  );
};
