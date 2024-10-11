'use client';
import React, { ReactNode } from 'react';
import Stack, { StackProps } from '@mui/material/Stack';

interface FormsContainerProps extends StackProps {
  children: ReactNode;
  padding: number;
}

export const FormsContainer = ({
  children,
  padding,
  ...props
}: FormsContainerProps) => {
  return (
    <Stack
      minHeight="calc(100vh - 90px)"
      alignItems="center"
      p={padding}
      sx={{ backgroundColor: 'primary.contrastText' }}
      {...props}
    >
      {children}
    </Stack>
  );
};
