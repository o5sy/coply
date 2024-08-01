import { PropsWithChildren, ReactNode } from 'react';
import { useIsLoggedIn } from '@/hooks';

interface WithAuthProps {
  fallback?: ReactNode;
}

export function WithAuth({
  children,
  fallback,
}: PropsWithChildren<WithAuthProps>) {
  const { accessToken, isLoggedIn } = useIsLoggedIn();

  if (!isLoggedIn || !accessToken) {
    return fallback;
  }
  return children;
}
