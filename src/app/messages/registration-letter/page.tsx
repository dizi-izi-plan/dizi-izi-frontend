import { MessageContainer } from '@/components/MessageContainer/MessageContainer';

const RegistrationLetter = () => {
  const email = 'hhh1133@mail.ru'; // перекинуть сюда email со страницы регистрации

  const text = [
    `Поздравляем с регистрацией! Осталось совсем чуть-чуть.`,
    `Мы отправили письмо на почту ${email}.
    Перейдите по ссылке из письма, чтобы подтвердить свой аккаунт.`,
  ];

  return <MessageContainer text={text} />;
};

export default RegistrationLetter;