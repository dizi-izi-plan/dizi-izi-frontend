import { ErrorContainer } from '@/components/ErrorContainer/ErrorContainer';

export default function ErrorPageNotFound() {
  return (
    <ErrorContainer title="Запрашиваемая Вами страница не найдена" code={404} />
  );
}
