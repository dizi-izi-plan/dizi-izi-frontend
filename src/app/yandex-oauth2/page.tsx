'use client';
import { routes } from '@/helpers/common-constants/routes-constants';
import { useAuth } from '@/hooks/useAuth';
import { useConvertTokenMutation } from '@/redux/slices/auth-slice';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const AuthYandex = () => {
  const param = useSearchParams();
  const code = param?.get('code');
  const router = useRouter();
  const [convertToken] = useConvertTokenMutation();
  const isAuth = useAuth();

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
        const encodedCredentials = btoa(`${clientId}:${clientSecret}`);
        const parametr = new URLSearchParams({
          grant_type: 'authorization_code',
          code,
        });

        const response = await fetch('https://oauth.yandex.ru/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${encodedCredentials}`,
          },
          body: parametr.toString(),
        });

        const data = await response.json();
        
        const convertResponse = await convertToken({
          clientId: clientIdDizi,
          clientSecret: clientSecretDizi,
          token: data.access_token,
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
  }, [code, ]);

  return null;
};
export default AuthYandex;
