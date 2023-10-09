import { MessageContainer } from '@/containers/MessageContainer/MessageContainer';

const ResetPasswordMessage = () => {
  const email = 'P!111111@gmail.com'; // перекинуть сюда email с прошлой сраницы, куда пользоваетль ввел почту

  const text = [
    `Мы отправили сообщение о восстановлении пароля
    на вашу почту ${email}.
    Проверьте, пожалуйста, папку «Входящие»
    или папку «Спам».`,
  ];

  return <MessageContainer text={text} />;
};

export default ResetPasswordMessage;
