import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleButton } from '@/components/signin-page';
import { setSession } from '@/utils/session';
import { useGoogleLogin } from './hooks';

export function SignInContainer() {
  const router = useRouter();

  const { onGoogleLogin, isLoading } = useGoogleLogin({
    onSuccess: (res) => {
      setSession(res.accessToken);
      router.push('/');
    },
  });

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Image src="/flag.svg" width={100} height={100} alt="logo" />
      <Link className="mb-9 text-5xl text-primary" href="/">
        Coply
      </Link>
      <GoogleButton onClick={onGoogleLogin} disabled={isLoading} />
    </main>
  );
}
