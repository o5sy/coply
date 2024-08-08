import { skipToken, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import { getIsAdminAuthorization } from '@/apis/admin';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';

export function WithAdminAuth({ children }: PropsWithChildren) {
  const router = useRouter();

  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { data, isSuccess } = useQuery({
    queryKey: ['user', 'authorization'],
    queryFn: accessToken
      ? () => {
          return getIsAdminAuthorization(accessToken);
        }
      : skipToken,
  });

  useEffect(() => {
    // accessToken 값이 없을 때(쿼리 요청 x)와 fetch 완료 했는데 권한 값이 false 인 경우 리디렉션
    if (!accessToken || (isSuccess && !data)) {
      router.push('/');
    }
  }, [isSuccess, data]);

  // fetch 도 완료하고, data 가 리턴하는 권한 값이 true 일 경우에만 렌더링
  if (isSuccess && data) {
    return children;
  }
  return null;
}
