import { ErrorContainer } from '@/containers/ErrorContainer/ErrorContainer';

export default function NotFound() {
  return (
    <ErrorContainer title="Запрашиваемая Вами страница не найдена" code={404} />
  );
}
