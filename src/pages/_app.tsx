import { ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import '@/styles/globals.css';
import '@/styles/reset.css';

import type { AppProps } from 'next/app';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
          <div id="portal" />
        </HydrationBoundary>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
