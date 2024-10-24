'use client';

import { useState, useLayoutEffect } from 'react';
import { MessageContainer } from '@/containers/MessageContainer/MessageContainer';

const ResetPasswordMessage = () => {
  const [email, setEmail] = useState<string>('');

  const text = [
    `Мы отправили сообщение о восстановлении пароля
    на вашу почту ${email}.
    Проверьте, пожалуйста, папку «Входящие»
    или папку «Спам».`,
  ];

  useLayoutEffect(() => {
    const prevEmail = localStorage.getItem('email');
    if (prevEmail) setEmail(prevEmail);
  }, []);

  return <MessageContainer text={text} />;
};

export default ResetPasswordMessage;
