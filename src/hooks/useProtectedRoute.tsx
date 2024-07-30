import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '@/helpers/common-constants/routes-constants';
import { useAuth } from '@/hooks/useAuth';

export const useProtectedRoute = () => {
  const router = useRouter();
  const isAuth = useAuth();

  useLayoutEffect(() => {
    if (!isAuth) router.push(routes.authRoutes.login);
  }, [isAuth, router]);
};
