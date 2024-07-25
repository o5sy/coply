import { useEffect, useState } from 'react';
import { axiosInstance } from '@/apis/axios';
import { getSession } from '@/utils/session';

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validateUser = async () => {
    const session = getSession();
    if (!session) {
      return false;
    }
    try {
      const res = await axiosInstance.get('users/me', {
        headers: { Authorization: `Bearer ${session}` },
      });
      return res.status === 200;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticating = await validateUser();
      setIsLoggedIn(isAuthenticating);
    };
    checkAuthentication();
  }, []);

  return { isLoggedIn };
};
