import { useRouter } from 'next/router';
import { useQuery, skipToken, useMutation } from '@tanstack/react-query';
import { signOut, resign } from '@/apis/auth';
import { getUser } from '@/apis/users';
import { UserSection } from '@/components/user-page';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession, removeSession } from '@/utils/session';

export function UserSectionContainer() {
  const router = useRouter();

  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: accessToken
      ? () => {
          return getUser(accessToken);
        }
      : skipToken,
    enabled: !!accessToken,
  });

  const { mutate: signOutMutate } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      removeSession();
      router.push('/');
    },
  });

  const { mutate: resignMutate } = useMutation({
    mutationFn: resign,
    onSuccess: () => {
      removeSession();
      router.push('/');
    },
  });

  return (
    <UserSection
      email={data?.email}
      onSignOut={signOutMutate}
      onResign={resignMutate}
    />
  );
}
