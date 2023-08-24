'use client';

import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { classNamesInput } from '@/helpers/classNameConstants';

interface InputPasswordProps {
  clName: string;
  lbl?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  clName,
  lbl,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const visibilityStyles = {
    color:
      clName === classNamesInput.dark
        ? 'secondary.contrastText'
        : 'myGray.grey500',
    width: 24,
    height: 24,
  };

  return (
    <TextField
      className={clName}
      type={showPassword ? 'text' : 'password'}
      label={lbl ? lbl : null}
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
