import Head from 'next/head';
import Image from 'next/image';
import { GoogleButton } from '@/components/signin-page';

export default function SigninPage() {
  return (
    <>
      <Head>
        <title>로그인 | Coply</title>
      </Head>

      <main className="my-[240px] flex flex-col items-center">
        <Image src="/flag.svg" width={120} height={120} alt="logo" />
        <div className="pb-[52px] font-sans text-6xl text-gray-700">Coply</div>
        <GoogleButton onClick={() => {}} />
      </main>
    </>
  );
}
