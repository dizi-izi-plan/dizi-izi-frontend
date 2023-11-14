'use client';

import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { PopperMessage } from '@/components/Popper/PopperMessage';

interface ArrowBackButtonProps {
  onClick?: () => void;
}

export const ArrowBackButton = ({ onClick }: ArrowBackButtonProps) => {
  const router = useRouter();

  if (!onClick) {
    onClick = () => {
      router.back();
    };
  }

  return (
    <Box sx={{ alignSelf: 'flex-start', position: 'absolute' }}>
      <PopperMessage tip="Назад">
        <Button variant="empty" onClick={onClick}>
          <ArrowBackIcon />
        </Button>
      </PopperMessage>
    </Box>
  );
};
