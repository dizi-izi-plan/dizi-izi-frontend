'use client';

import React, { forwardRef, useState, Ref } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  CLASS_NAMES_INPUT,
  InputVariant,
} from '@/components/Input/classNameConstants';

export type InputPasswordProps = TextFieldProps & {
  className: InputVariant;
  errorMessage?: string;
};

export const Password = (
  { className, errorMessage, ...props }: InputPasswordProps,
  ref: Ref<HTMLInputElement | HTMLDivElement>,
) => {
  const [showPassword, setShowPassword] = useState(false);

  const visibilityStyles = {
    color:
      className === CLASS_NAMES_INPUT.dark
        ? 'secondary.contrastText'
        : !(errorMessage && errorMessage?.length > 1)
          ? 'myGrey.grey500'
          : 'error.main',
    width: 24,
    height: 24,
  };

  return (
    <TextField
      className={className}
      type={showPassword ? 'text' : 'password'}
      label={props.label}
      placeholder={props.placeholder}
      onChange={props.onChange}
      ref={ref}
      sx={{
        '&.subvariant-light .MuiOutlinedInput-input': {
          color:
            errorMessage && errorMessage.length > 1 ? 'error.main' : undefined,
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((show) => !show)}
              onMouseDown={(event) => event.preventDefault()}
              onMouseUp={(event) => event.preventDefault()}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOffIcon sx={visibilityStyles} />
              ) : (
                <VisibilityIcon sx={visibilityStyles} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export const InputPassword = forwardRef(Password);
