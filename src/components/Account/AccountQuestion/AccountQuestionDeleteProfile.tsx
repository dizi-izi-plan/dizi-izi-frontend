import { AccountQuestionTemplate } from './AccountQuestionTemplate';

export const AccountQuestionDeleteProfile = () => {
  // TODO: to add handleYes (~ dispatch deleteProfile)
  return (
    <AccountQuestionTemplate
      question="Вы уверены, что хотите удалить профиль?"
      nameButtonYes="Да"
      handleYes={() => console.log('profile is deleted')}
      routePush="/"
      nameButtonNo="Нет"
    />
  );
};
