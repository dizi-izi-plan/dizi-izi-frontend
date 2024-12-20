'use client';
import { routes } from '@/helpers/common-constants/routes-constants';
import { setCookie } from '@/helpers/cookie/cookie';
import { useAuth } from '@/hooks/useAuth';
import { useConvertTokenMutation } from '@/redux/slices/auth-slice';
import { useGetVkTokenMutation } from '@/redux/slices/vkAuth';
import { useGetYandexTokenMutation } from '@/redux/slices/yandexAuthApi';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const AuthVk = () => {
  const param = useSearchParams();
  const code = param?.get('code');
  const router = useRouter();
  console.log(code);
  const [getVkToken] = useGetVkTokenMutation();

  useEffect(() => {
    if (!code) return;
    const VK_TOKEN_URL = 'https://id.vk.com/oauth2/auth';

    const fetchToken = async () => {
      try {
        const response = await fetch('https://id.vk.com/oauth2/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: process.env.NEXT_PUBLIC_VK_CLIENT_ID || '',
            client_secret: process.env.NEXT_PUBLIC_VK_CLIENT_SECRET || '',
            redirect_uri: process.env.NEXT_PUBLIC_VK_REDIRECT_URI || '',
            code: code || '',
          }).toString(),
        });

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();

        console.log('Токен VK:', data);

        if (data.access_token) {
          console.log(data.access_token);
          
        } else {
          console.error('Не удалось получить access_token:', data);
        }
      } catch (error) {
        console.error('Ошибка авторизации через VK:', error);
      }
      //   try {
      //     const response = await getVkToken({
      //       clientId: process.env.NEXT_PUBLIC_VK_CLIENT_ID,
      //       redirectUri: process.env.NEXT_PUBLIC_VK_REDIRECT_URI,
      //       code,
      //     }).unwrap();
      //     // setCookie('vk_token', response.access_token, 3);
      //     console.log(response);
      //     // // Пример: обработка пользователя
      //     // if (response.email) {
      //     //   console.log('Email:', response.email);
      //     // }
      //     // router.push(routes.personalAccount);
      //   } catch (error) {
      //     console.error('Ошибка авторизации через VK:', error);
      //     // router.push(routes.authRoutes.login);
      //   }
    };
    fetchToken();
  }, [code, getVkToken, router]);

  //   const [convertToken] = useConvertTokenMutation();
  //   const isAuth = useAuth();
  //   const [getYandexToken] = useGetYandexTokenMutation();

  //   const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  //   const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  //   const clientIdDizi = process.env.NEXT_PUBLIC_CLIENT_ID_DIZI;
  //   const clientSecretDizi = process.env.NEXT_PUBLIC_CLIENT_SECRET_DIZI;

  //   useEffect(() => {
  //     if (!code) return;
  //     if (isAuth) {
  //       router.push(routes.personalAccount);
  //       return;
  //     }

  //     const fetchToken = async () => {
  //       try {
  //         const response = await getYandexToken({
  //           clientId,
  //           clientSecret,
  //           code,
  //         }).unwrap();

  //         const convertResponse = await convertToken({
  //           clientId: clientIdDizi,
  //           clientSecret: clientSecretDizi,
  //           token: response.access_token,
  //         }).unwrap();

  //         if (convertResponse.access_token) {
  //           router.push(routes.personalAccount);
  //         } else {
  //           router.push(routes.authRoutes.login);
  //         }
  //       } catch (error) {
  //         console.error('Ошибка получения токена:', error);
  //       }
  //     };

  //     fetchToken();
  //   }, [code]);

  return null;
};
export default AuthVk;
