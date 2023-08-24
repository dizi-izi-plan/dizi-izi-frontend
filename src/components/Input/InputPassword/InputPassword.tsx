'use client';

import React, { useState } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  CLASS_NAMES_INPUT,
  InputVariant,
} from '@/components/Input/classNameConstants';

type InputPasswordProps = TextFieldProps & {
  className: InputVariant;
};

export const InputPassword: React.FC<InputPasswordProps> = ({
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const visibilityStyles = {
    color:
      className === CLASS_NAMES_INPUT.dark
        ? 'secondary.contrastText'
        : 'myGrey.grey500',
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
