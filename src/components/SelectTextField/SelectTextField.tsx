'use client';

import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { InputVariant } from '@/components/Input/classNameConstants';

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
