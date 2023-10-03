import { MessageContainer } from '@/components/MessageContainer/MessageContainer';

const ConfirmRegistration = () => {
  const text = [
    `Спасибо, что подтвердили ваш адрес.
    Войдите, чтобы начать проектировать квартиру своей мечты. `,
  ];

  const buttonInfo = {
    name: 'Войти',
    route: '/login', // добавить нужный роут, по которому будет вход
  };

  return <MessageContainer text={text} button={buttonInfo} />;
};

export default ConfirmRegistration;