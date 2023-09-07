'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { InputVariant } from '@/components/Input/classNameConstants';
import { fetchCities } from '../../redux/features/cities-slice';

const listOfCities = [
  {
    value: 'Питер',
    label: 'Питер',
  },
  {
    value: 'Нижний',
    label: 'Нижний',
  },
  {
    value: 'Ярославль',
    label: 'Ярославль',
  },
];

type SelectTextFieldProps = TextFieldProps & {
  className: InputVariant;
  placeholder: string;
};

export const SelectTextField: React.FC<SelectTextFieldProps> = (props) => {
  const dispatch = useAppDispatch();
  const apiCities = useAppSelector((state) => state.cities.entities);
  console.log(apiCities);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <TextField
      {...props}
      SelectProps={{
        displayEmpty: true,
      }}
    >
      <MenuItem value="">
        <em>{props.placeholder}</em>
      </MenuItem>
      {listOfCities.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
