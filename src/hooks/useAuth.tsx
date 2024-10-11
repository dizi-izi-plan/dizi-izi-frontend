import { useGetUserDataQuery } from '@/redux/slices/user-slice';

export const useAuth = () => {
  const { data = null } = useGetUserDataQuery('');

  return Boolean(data?.email);
};
