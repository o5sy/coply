import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useIsLoggedIn } from '@/hooks';

export function WithAdminAuth({ children }: PropsWithChildren) {
  const router = useRouter();
  const { accessToken, status } = useIsLoggedIn();

  useEffect(() => {
    // todo 관리자 권한 체크 추가
    if (!accessToken || status === 'error') {
      router.push('/');
    }
  }, [accessToken, status, router]);

  if (!accessToken || status !== 'success') {
    return null;
  }
  return children;
}
