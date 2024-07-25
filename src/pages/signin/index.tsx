import { signIn } from '@/apis/auth';
import { GoogleButton } from '@/components/signin-page';
import { setSession } from '@/utils/session';
import { useMutation } from '@tanstack/react-query';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function SigninPage() {
  const router = useRouter();

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (res) => {
      setSession(res.accessToken);
      router.push('/');
    },
  });

  useEffect(() => {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get('access_token');
    if (!accessToken) {
      return;
    }
    signInMutation.mutate({ token: accessToken });
  }, [signInMutation.mutate]);

  const handleGoogleSignIn = () => {
    if (
      !process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
      !process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
    ) {
      return;
    }

    const url = new URL('https://accounts.google.com/o/oauth2/auth');
    url.searchParams.set('client_id', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
    url.searchParams.set(
      'redirect_uri',
      process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    );
    url.searchParams.set('response_type', 'token');
    url.searchParams.set(
      'scope',
      'https://www.googleapis.com/auth/userinfo.email',
    );
    window.location.href = url.toString();
  };

  return (
    <>
      <Head>
        <title>로그인 | Coply</title>
      </Head>

      <main className="my-[240px] flex flex-col items-center">
        <Image src="/flag.svg" width={120} height={120} alt="logo" />
        <Link className="mb-[52px] font-sans text-6xl text-gray-700" href="/">
          Coply
        </Link>
        <GoogleButton
          onClick={handleGoogleSignIn}
          disabled={signInMutation.isPending}
        />
      </main>
    </>
  );
}
