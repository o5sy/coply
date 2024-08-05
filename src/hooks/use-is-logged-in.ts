import { useEffect, useState } from 'react';
import { skipToken, useQuery } from '@tanstack/react-query';
import { getUser } from '@/apis/users';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { getSession } from '@/utils/session';
import { useLocalStorage } from './use-local-storage';

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { isSuccess, status } = useQuery({
    queryKey: ['user'],
    queryFn: accessToken
      ? () => {
          return getUser(accessToken);
        }
      : skipToken,
    enabled: !!accessToken,
  });

  useEffect(() => {
    if (!accessToken) {
      setIsLoggedIn(false);
    } else if (isSuccess) {
      setIsLoggedIn(true);
    }
  }, [isSuccess, accessToken]);

  return { isLoggedIn, accessToken, status };
};
