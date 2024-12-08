'use client';
import { routes } from '@/helpers/common-constants/routes-constants';
import { useAuth } from '@/hooks/useAuth';
import { useConvertTokenMutation } from '@/redux/slices/auth-slice';
import { useGetYandexTokenMutation } from '@/redux/slices/yandexAuthApi';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const AuthYandex = () => {
  const param = useSearchParams();
  const code = param?.get('code');
  const router = useRouter();
  const [convertToken] = useConvertTokenMutation();
  const isAuth = useAuth();
  const [getYandexToken] = useGetYandexTokenMutation();

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const clientIdDizi = process.env.NEXT_PUBLIC_CLIENT_ID_DIZI;
  const clientSecretDizi = process.env.NEXT_PUBLIC_CLIENT_SECRET_DIZI;

  useEffect(() => {
    if (!code) return;
    if (isAuth) {
      router.push(routes.personalAccount);
      return;
    }

    const fetchToken = async () => {
      try {
        const response = await getYandexToken({
          clientId,
          clientSecret,
          code,
        }).unwrap();

        const convertResponse = await convertToken({
          clientId: clientIdDizi,
          clientSecret: clientSecretDizi,
          token: response.access_token,
        }).unwrap();

        if (convertResponse.access_token) {
          router.push(routes.personalAccount);
        } else {
          router.push(routes.authRoutes.login);
        }
      } catch (error) {
        console.error('Ошибка получения токена:', error);
      }
    };

    fetchToken();
  }, [
    code,
    router,
    isAuth,
    clientId,
    clientIdDizi,
    clientSecret,
    clientSecretDizi,
    convertToken,
    getYandexToken,
  ]);

  return null;
};
export default AuthYandex;
