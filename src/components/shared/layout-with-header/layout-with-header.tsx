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
        <footer className="h-30 bg-slate-800">
          <div className="layout py-8 text-sm text-gray-300">
            코플리 | team.coply@gmail.com
          </div>
        </footer>
      </div>
    </>
  );
}
