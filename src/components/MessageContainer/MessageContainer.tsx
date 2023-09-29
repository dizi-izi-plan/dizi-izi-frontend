'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ButtonInfo {
  name: string;
  route: string;
}

interface MessagePageProps {
  text: string[];
  button?: ButtonInfo;
}

export const MessageContainer = ({ text, button }: MessagePageProps) => {
  const router = useRouter();

  return (
    <Stack
      width="100%"
      minHeight="calc(100vh - 90px)"
      justifyContent="flex-start"
      alignItems="center"
      rowGap="32px"
      p="72px 0"
      sx={{ backgroundColor: 'primary.contrastText' }}
    >
      {text.map((text, index) => (
        <Typography
          key={index}
          variant="body2"
          color="secondary.contrastText"
          textAlign="center"
          whiteSpace="pre-line"
        >
          {text}
        </Typography>
      ))}
      {button && (
        <Button
          variant="default"
          size="large"
          onClick={() => router.push(button.route)}
          sx={{ mt: '56px' }}
        >
          {button.name}
        </Button>
      )}
    </Stack>
  );
};
