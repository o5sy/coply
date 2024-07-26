import Head from 'next/head';
import { SignInContainer } from '@/containers/pages/signin';

export default function SigninPage() {
  return (
    <>
      <Head>
        <title>로그인 | Coply</title>
      </Head>
      <SignInContainer />
    </>
  );
}
