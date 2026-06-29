import { useGetUserDataQuery } from '@/redux/api/user-api';

export const useAuth = () => {
  const result = useGetUserDataQuery('');
  const { data, error, isLoading } = result;

  console.log('useAuth debug:', { data, error, isLoading });

  return Boolean(data?.email);
};

// ЗАГЛУШКА: Возвращаем моковые данные пользователя, пока бэкенд не реализован
// const data = {
//   id: 'mock-user-id',
//   email: 'mock@example.com',
//   first_name: 'Тестовый',
//   last_name: 'Пользователь',
//   // Добавьте другие поля, которые ожидаются на фронтенде
// };
