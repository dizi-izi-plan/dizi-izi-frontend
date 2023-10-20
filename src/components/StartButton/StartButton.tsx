'use client';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';

export const StartButton = () => {
  const router = useRouter();
  const isLoggedIn = false;

  //TODO заменить isLoggen на данные из редакса
  // заменить ссылку с /personal-account на /new-project (страница еще не создана)

  return (
    <Button
      variant="default"
      onClick={() => router.push(isLoggedIn ? '/personal-account' : '/login')}
    >
      Начать
    </Button>
  );
};
