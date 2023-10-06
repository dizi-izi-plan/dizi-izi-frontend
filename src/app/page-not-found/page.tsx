import { ErrorContainer } from '@/containers/ErrorContainer/ErrorContainer';

const ErrorPageNotFound = () => {
  return (
    <ErrorContainer title="Запрашиваемая Вами страница не найдена" code={404} />
  );
};

export default ErrorPageNotFound;
