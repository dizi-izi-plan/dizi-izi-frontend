import { MessageContainer } from '@/containers/MessageContainer/MessageContainer';
import { routes } from '@/helpers/common-constants/routes-constants';

const ConfirmRegistrationMessage = () => {
  const text = [
    `Спасибо, что подтвердили ваш адрес.
    Войдите, чтобы начать проектировать квартиру своей мечты. `,
  ];

  const buttonInfo = {
    name: 'Войти',
    route: routes.authRoutes.login,
  };

  return <MessageContainer text={text} button={buttonInfo} />;
};

export default ConfirmRegistrationMessage;
