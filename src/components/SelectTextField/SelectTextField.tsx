'use client';

import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { InputVariant } from '@/components/Input/classNameConstants';
import { fetchCities } from '../../redux/features/cities-slice';

const listOfCities = ['Питер', 'Нижний', 'Ярославль'];

type SelectTextFieldProps = TextFieldProps & {
  className: InputVariant;
  placeholder: string;
};

export const SelectTextField: React.FC<SelectTextFieldProps> = (props) => {
  const dispatch = useAppDispatch();
  const apiCities = useAppSelector((state) => state.cities.citiesNames);
  console.log(apiCities);

  const handleOnFocus = useCallback(() => {
    if (!apiCities.length) {
      dispatch(fetchCities());
    }
  }, [apiCities, dispatch]);

  return (
    <TextField
      {...props}
      SelectProps={{
        displayEmpty: true,
      }}
      onFocus={handleOnFocus}
    >
      <MenuItem value="">
        <em>{listOfCities.length ? props.placeholder : 'Идет загрузка...'}</em>
      </MenuItem>
      {listOfCities.map((city) => (
        <MenuItem key={city} value={city}>
          {city}
        </MenuItem>
      ))}
    </TextField>
  );
};
