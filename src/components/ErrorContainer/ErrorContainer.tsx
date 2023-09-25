'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ErrorPageProps {
  title: string;
  subtitle?: string;
  code?: number;
}

export const ErrorContainer = ({ title, subtitle, code }: ErrorPageProps) => {
  const router = useRouter();

  return (
    <Stack
      width={'100%'}
      minHeight={'calc(100vh - 90px)'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={'133px 0 118px'}
      sx={{ backgroundColor: 'primary.contrastText' }}
    >
      <Stack
        rowGap={subtitle ? '98px' : '60px'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography variant="h3" color="secondary.contrastText">
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body2"
            color="secondary.contrastText"
            maxWidth={'850px'}
            textAlign={'center'}
          >
            {subtitle}
          </Typography>
        )}
        {code && (
          <Typography
            variant="h1"
            fontWeight={'400'}
            color="secondary.contrastText"
            letterSpacing={'24.96px'}
            // pt={'48px'}
          >
            {code}
          </Typography>
        )}
      </Stack>
      <Button variant="default" size="large" onClick={() => router.back()}>
        Назад
      </Button>
    </Stack>
  );
};
