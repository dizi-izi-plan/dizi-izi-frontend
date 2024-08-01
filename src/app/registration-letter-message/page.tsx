import { MessageContainer } from '@/containers/MessageContainer/MessageContainer';

const RegistrationLetterMessage = () => {
  const text = [
    `Поздравляем с регистрацией! Осталось совсем чуть-чуть.`,
    `Мы отправили письмо на вашу почту.
    Перейдите по ссылке из письма, чтобы подтвердить свой аккаунт.`,
  ];

  return <MessageContainer text={text} />;
};

export default RegistrationLetterMessage;
