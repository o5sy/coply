import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { useIsLoggedIn } from '@/hooks';
import { ResponsiveHeader } from '@/components/responsive-header';
import { Footer } from '@/components/footer';

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

      <div className="flex min-h-screen flex-col">
        <ResponsiveHeader isLoggedIn={isLoggedIn} />
        {children}
        <Footer />
      </div>
    </>
  );
}
