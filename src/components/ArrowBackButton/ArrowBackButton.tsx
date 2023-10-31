'use client';

import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const ArrowBackButton = () => {
  const router = useRouter();

  return (
    <Button variant="empty" sx={{ alignSelf: 'flex-start' }}>
      <ArrowBackIcon onClick={() => router.back()} />
    </Button>
  );
};
