'use client';

import { useRouter } from 'next/navigation';
import { Stack, Button, Typography } from '@mui/material';
import { routes } from '@/helpers/common-constants/routes-constants';

const ErrorCommonMessage = () => {
  const router = useRouter();

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="calc(100vh - 90px)"
      rowGap="44px"
    >
      <Typography variant="subtitle1" color="black.main" whiteSpace="pre-line">
        Вы удалили профиль.
      </Typography>
      <Button
        variant="default"
        sx={{ color: 'black.main' }}
        size="large"
        onClick={() => router.push(routes.authRoutes.register)}
      >
        Создать личный кабинет
      </Button>
    </Stack>
  );
};

export default ErrorCommonMessage;
