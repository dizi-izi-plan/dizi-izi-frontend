'use client';

import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { classNamesInput } from '@/helpers/classNameConstants';

interface InputPasswordProps {
  variant: string;
  label?: string;
  placeholder?: string;
  onChange?: () => void;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  variant,
  label,
  placeholder,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const visibilityStyles = {
    color:
      variant === classNamesInput.dark
        ? 'secondary.contrastText'
        : 'myGrey.grey500',
    width: 24,
    height: 24,
  };

  return (
    <TextField
      className={variant}
      type={showPassword ? 'text' : 'password'}
      label={label ? label : null}
      placeholder={placeholder ? placeholder : undefined}
      onChange={onChange}
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
                <VisibilityOff sx={visibilityStyles} />
              ) : (
                <Visibility sx={visibilityStyles} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
