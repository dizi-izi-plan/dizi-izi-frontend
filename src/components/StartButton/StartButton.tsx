'use client';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import { routes } from '@/helpers/common-constants/routes-constants';
import { useAuth } from '@/hooks/useAuth';

export const StartButton = () => {
  const router = useRouter();
  const isAuth = useAuth();

  return (
    <Button
      variant="default"
      onClick={() =>
        router.push(isAuth ? routes.personalAccount : routes.authRoutes.login)
      }
    >
      Начать
    </Button>
  );
};
