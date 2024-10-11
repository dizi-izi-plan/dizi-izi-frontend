'use client';
import React, { ReactNode } from 'react';
import Stack from '@mui/material/Stack';

interface PageContainerProps {
  children: ReactNode;
  color: string;
}

export const PageContainer = ({ children, color }: PageContainerProps) => {
  return (
    <Stack
      minHeight="calc(100vh - 90px)"
      flexDirection="row"
      p="44px 0 0"
      width="80%"
      columnGap="11%"
      m="0 auto 0"
      maxWidth="1120px"
      sx={{ backgroundColor: color }}
    >
      {children}
    </Stack>
  );
};
