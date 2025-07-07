import { useGetUserDataQuery } from '@/redux/api/user-api';

export const useAuth = () => {
  const { data = null } = useGetUserDataQuery('');

  return Boolean(data?.email);
};
