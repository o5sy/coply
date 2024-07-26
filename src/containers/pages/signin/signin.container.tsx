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
    <main className="my-[240px] flex flex-col items-center">
      <Image src="/flag.svg" width={120} height={120} alt="logo" />
      <Link className="mb-[52px] font-sans text-6xl text-gray-700" href="/">
        Coply
      </Link>
      <GoogleButton onClick={onGoogleLogin} disabled={isLoading} />
    </main>
  );
}
