'use client';
import { routes } from '@/helpers/common-constants/routes-constants';
import { deleteCookie, setCookie } from '@/helpers/cookie/cookie';
import { useAuth } from '@/hooks/useAuth';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
type ActivateUserType = {
  token: string;
};
const AuthYandex = () => {
  const { token = '' } = useParams<ActivateUserType>() || {};
  const router = useRouter();
  deleteCookie('token');
  setCookie('token', token, 3);
  const isAuth = useAuth();
  useEffect(() => {
    if (isAuth) {
      router.push(routes.personalAccount);
    } else {
      router.push(routes.authRoutes.login);
    }
  }, [isAuth, token, router]);

  return;
};

export default AuthYandex;
