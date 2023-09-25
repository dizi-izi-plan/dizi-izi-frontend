import { MessageContainer } from '@/components/MessageContainer/MessageContainer';

export default function ConfirmRegistration() {
  // вероятно, url будет содержать uid, token, попросить, чтобы бэки вприсали email? иначе откуда взять? или это не серьюрно?
  const email = 'hhh1133@mail.ru'; // перекинуть сюда email из url страницы, если бэки его предоставляют

  const text = [
    `Спасибо, что подтвердили ваш адрес ${email}.
    Начните проектировать квартиру своей мечты. `,
  ];

  const buttonInfo = {
    name: 'Войти',
    route: '/login', // добавить нужный роут, по которому будет вход
  };

  return <MessageContainer text={text} button={buttonInfo} />;
}
