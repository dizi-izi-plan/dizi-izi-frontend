'use client';
import { routes } from '@/helpers/common-constants/routes-constants';
import { deleteCookie, setCookie } from '@/helpers/cookie/cookie';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
type ActivateUserType = {
  params: {
    token: string;
  };
};
const AuthYandex = ({ params }: ActivateUserType) => {
  const router = useRouter();
  deleteCookie('token');
  setCookie('token', params.token, 3);
  const isAuth = useAuth();
  useEffect(() => {
    if (isAuth) {
      router.push(routes.personalAccount);
    } else {
      router.push(routes.authRoutes.login);
    }
  }, [isAuth, params.token, router]);

  return;
};

export default AuthYandex;
