'use client';

import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { InputVariant } from '@/components/Input/classNameConstants';
import { useGetCitiesQuery } from '@/redux/slices/api-slice';

type SelectTextFieldProps = TextFieldProps & {
  className: InputVariant;
  placeholder: string;
};

export const AutocompleteCities = (props: SelectTextFieldProps) => {
  const { data = [] } = useGetCitiesQuery('');

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: string) => option,
  });

  return (
    <Autocomplete
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      disablePortal
      noOptionsText={data.length ? 'Город не найден' : 'Идет загрузка...'}
      options={data}
      filterOptions={filterOptions}
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
