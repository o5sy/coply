import Head from 'next/head';
import { PropsWithChildren, useEffect, useState } from 'react';
import { getSession } from '@/utils/session';
import { Header } from '../header';

interface LayoutWithHeaderProps {
  title?: string;
}

export function LayoutWithHeader({
  children,
  title,
}: PropsWithChildren<LayoutWithHeaderProps>) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (session) {
      setIsLoggedIn(true);
    }
  }, []);

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
