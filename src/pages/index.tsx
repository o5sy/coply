import { Header } from '@/components/header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coply</title>
      </Head>
      <div className="relative">
        <Header />
        <main className="absolute top-0 mt-[65px] w-full"></main>
      </div>
    </>
  );
}
