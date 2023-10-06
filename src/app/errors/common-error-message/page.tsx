import { ErrorContainer } from '@/containers/ErrorContainer/ErrorContainer';

const ErrorCommonMessage = () => {
  return (
    <ErrorContainer
      title="Внутренняя ошибка"
      subtitle="Мы уже устраняем неисправность, попробуйте обновить страницу через некоторое время. Приносим извинения за временные неудобства."
    />
  );
};

export default ErrorCommonMessage;
