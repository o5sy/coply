import { skipToken, useQuery } from '@tanstack/react-query';
import { getUser } from '@/apis/users';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { getSession } from '@/utils/session';
import { useLocalStorage } from './use-local-storage';

export const useIsLoggedIn = () => {
  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { isSuccess } = useQuery({
    queryKey: ['user'],
    queryFn: accessToken
      ? () => {
          return getUser(accessToken);
        }
      : skipToken,
    enabled: !!accessToken,
  });

  return { isLoggedIn: isSuccess, accessToken };
};
