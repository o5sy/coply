import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import { useIsLoggedIn } from '@/hooks';

export function WithAdminAuth({ children }: PropsWithChildren) {
  const router = useRouter();
  const { accessToken, isLoggedIn } = useIsLoggedIn();

  useEffect(() => {
    // todo 관리자 권한 체크 추가
    if (!isLoggedIn || !accessToken) {
      router.push('/');
    }
  }, []);

  return children;
}
