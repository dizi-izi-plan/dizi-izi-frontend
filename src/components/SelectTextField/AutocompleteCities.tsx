'use client';

import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { InputVariant } from '@/components/Input/classNameConstants';
import { fetchCities } from '../../redux/slices/cities-slice';

type SelectTextFieldProps = TextFieldProps & {
  className: InputVariant;
  placeholder: string;
};

export const AutocompleteCities = (props: SelectTextFieldProps) => {
  const dispatch = useAppDispatch();
  const apiCities = useAppSelector((state) => state.cities.citiesNames);

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: string) => option,
  });

  const handleOnFocus = useCallback(() => {
    if (!apiCities.length) {
      dispatch(fetchCities());
    }
  }, [apiCities, dispatch]);

  return (
    <Autocomplete
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      onFocus={handleOnFocus}
      disablePortal
      noOptionsText={apiCities.length ? 'Город не найден' : 'Идет загрузка...'}
      options={apiCities}
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
