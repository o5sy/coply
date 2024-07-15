import { Header } from '@/components/header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coply</title>
      </Head>
      <Header />
      <main />
    </>
  );
}
