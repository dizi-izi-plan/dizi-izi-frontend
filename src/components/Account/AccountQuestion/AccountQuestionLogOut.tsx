import { AccountQuestionTemplate } from './AccountQuestionTemplate';

export const AccountQuestionLogOut = () => {
  // TODO: to add handleYes (~ dispatch logOut)
  return (
    <AccountQuestionTemplate
      question="Вы уверены, что хотите выйти из профиля?"
      nameButtonYes="Да"
      handleYes={() => console.log('Log out')}
      routePush="/"
      nameButtonNo="Нет"
    />
  );
};
