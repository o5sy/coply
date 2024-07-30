import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Header } from '@/components/header';
import { useIsLoggedIn } from '@/hooks';

interface LayoutWithHeaderProps {
  title?: string;
}

export function LayoutWithHeader({
  children,
  title,
}: PropsWithChildren<LayoutWithHeaderProps>) {
  const { isLoggedIn } = useIsLoggedIn();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="relative">
        <Header isLoggedIn={isLoggedIn} />
        {children}
      </div>
    </>
  );
}
