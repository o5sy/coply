import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { AdminHeader } from './admin-header';

interface LayoutWithAdminHeaderProps {
  title?: string;
}

export function LayoutWithAdminHeader({
  children,
  title,
}: PropsWithChildren<LayoutWithAdminHeaderProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="relative">
        <AdminHeader />
        {children}
      </div>
    </>
  );
}
