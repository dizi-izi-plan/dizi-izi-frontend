// import dynamic from 'next/dynamic';
import { ErrorContainer } from '@/containers/ErrorContainer/ErrorContainer';
import { Header } from '@/components/Header/Header';
import { ThemeRegistry } from '@/mui/ThemeRegistry';

const ErrorPageNotFound = () => {
  return (
    <ThemeRegistry options={{ key: 'mui' }}>
      <Header />
      <ErrorContainer
        title="Запрашиваемая Вами страница не найдена"
        code={404}
      />
    </ThemeRegistry>
  );
};

export default ErrorPageNotFound;
