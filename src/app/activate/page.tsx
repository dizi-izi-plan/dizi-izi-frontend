'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';
import { FormsContainer } from '@/containers/FormsContainer/FormsContainer';
import { MessageContainer } from '@/containers/MessageContainer/MessageContainer';
import { useActivateUserMutation } from '@/redux/api/auth-api';
import { routes } from '@/helpers/common-constants/routes-constants';

const errorText = {
  400: [`Произошла ошибка, неверный токен для данного пользователя`],
  error: [`Произошла непредвиденная ошибка`],
};

const text = [
  `Спасибо, что подтвердили ваш адрес.
    Войдите, чтобы начать проектировать квартиру своей мечты. `,
];

const buttonInfo = {
  back: {
    name: 'Назад',
    route: routes.authRoutes.registrationLetterMessage,
  },
  login: {
    name: 'Войти',
    route: routes.authRoutes.login,
  },
};

export default function ActivateUser() {
  // const { uid, token } = useParams<ActivateUserType>() || {};
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [activateUser, { isLoading, error }] = useActivateUserMutation();

  useEffect(() => {
    if (token) {
      // Убедимся, что токен есть в URL
      try {
        activateUser(token) // Передаем только токен
          .unwrap()
          .then(() => localStorage.removeItem('email'))
          .catch((err) => {
            console.error('rejected', err);
          });
      } catch (e) {
        console.error(e);
      }
    }
  }, [activateUser, token]);

  if (isLoading)
    return (
      <FormsContainer padding={2} justifyContent="center">
        <CircularProgress color="primary" />
      </FormsContainer>
    );

  if (error && 'status' in error) {
    let messageText: string[];

    switch (error.status) {
      case 400:
        messageText = errorText[400];
        break;
      default:
        messageText = errorText['error'];
    }

    return (
      <FormsContainer padding={2} justifyContent="center">
        <MessageContainer text={messageText} button={buttonInfo.back} />
      </FormsContainer>
    );
  }

  return <MessageContainer text={text} button={buttonInfo.login} />;
}
