import Head from 'next/head';
import { WatchContainer } from '@/containers/pages/watch';

export default function WatchPage() {
  const title = '영상 제목';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <WatchContainer title={title} />
    </>
  );
}
