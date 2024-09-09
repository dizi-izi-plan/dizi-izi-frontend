'use client';

import { MessageContainer } from '@/containers/MessageContainer/MessageContainer';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useResendActivationMutation } from '@/redux/slices/auth-slice';

const text = [
  `Поздравляем с регистрацией! Осталось совсем чуть-чуть.`,
  `Мы отправили письмо на вашу почту.
    Перейдите по ссылке из письма, чтобы подтвердить свой аккаунт.`,
];

const RegistrationLetterMessage = () => {
  const [resendActivation, { isLoading }] = useResendActivationMutation();

  const handleClick = async () => {
    const email = localStorage.getItem('email');

    if (email) {
      try {
        await resendActivation({ email: email }).unwrap();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <MessageContainer text={text}>
      <Button onClick={handleClick} variant="default" size="large">
        {isLoading ? (
          <CircularProgress color="primary" />
        ) : (
          'Отправить письмо повторно'
        )}
      </Button>
    </MessageContainer>
  );
};

export default RegistrationLetterMessage;
