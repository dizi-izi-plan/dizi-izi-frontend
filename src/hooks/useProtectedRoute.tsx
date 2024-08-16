import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '@/helpers/common-constants/routes-constants';
import { useAuth } from '@/hooks/useAuth';
import { getCookie } from '@/helpers/cookie/cookie';

export const useProtectedRoute = () => {
  const router = useRouter();
  const isAuth = useAuth();

  useLayoutEffect(() => {
    const token = getCookie('token');

    if (!isAuth && !token) router.push(routes.authRoutes.login);
  }, [isAuth, router]);
};
