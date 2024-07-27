'use client';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import { selectIsAuth } from '@/redux/slices/user-slice';

export const StartButton = () => {
  const router = useRouter();
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <Button
      variant="default"
      onClick={() => router.push(isAuth ? '/personal-account' : '/login')}
    >
      Начать
    </Button>
  );
};
