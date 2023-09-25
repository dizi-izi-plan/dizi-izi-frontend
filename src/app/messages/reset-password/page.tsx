import { MessageContainer } from '@/components/MessageContainer/MessageContainer';

export default function ErrorPageNotFound() {
  const email = 'P!111111@gmail.com'; // после появления слайса с информацией о пользователе - взять с помочьщю useSelector

  const text = [
    `Мы отправили сообщение о восстановлении пароля\nна вашу почту ${email}. Проверьте, пожалуйста, папку «Входящие» или папку «Спам».`,
  ];

  return <MessageContainer text={text} />;
}
