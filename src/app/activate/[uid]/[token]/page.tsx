'use client';

import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { FormsContainer } from '@/containers/FormsContainer/FormsContainer';
import { MessageContainer } from '@/containers/MessageContainer/MessageContainer';
import { useActivateUserMutation } from '@/redux/slices/auth-slice';
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

type activateUserType = {
  params: {
    token: string;
    uid: string;
  };
};

export default function ActivateUser({ params }: activateUserType) {
  const [activateUser, { isLoading, error }] = useActivateUserMutation();

  useEffect(() => {
    try {
      activateUser({
        uid: params.uid,
        token: params.token,
      })
        .unwrap()
        .catch((error) => {
          console.error('rejected', error);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (isLoading)
    return (
      <FormsContainer padding={2} justifyContent="center">
        <CircularProgress color="primary" />
      </FormsContainer>
    );

  if (error) {
    if ('status' in error) {
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
  }

  return <MessageContainer text={text} button={buttonInfo.login} />;
}
