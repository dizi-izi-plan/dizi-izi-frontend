import { ErrorContainer } from '@/components/ErrorContainer/ErrorContainer';

export default function ErrorCommonMessage() {
  return (
    <ErrorContainer
      title="Внутренняя ошибка"
      subtitle="Мы уже устраняем неисправность, попробуйте обновить страницу через некоторое время. Приносим извинения за временные неудобства."
    />
  );
}
