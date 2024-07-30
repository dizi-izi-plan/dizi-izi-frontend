import { useAppSelector } from '@/redux/hooks';
import { selectIsAuth } from '@/redux/slices/user-slice';

export const useAuth = () => {
  const isAuth = useAppSelector(selectIsAuth);
  return isAuth;
};
