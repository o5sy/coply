import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '@/apis/auth';
import { SignInResponse } from '@/apis/models/auth';
import { getGoogleAccessTokenFromPath, getGoogleOAuthUrl } from '../utils';

interface UseGoogleLoginProps {
  onSuccess?: (res: SignInResponse) => void;
}

export const useGoogleLogin = ({ onSuccess }: UseGoogleLoginProps) => {
  const { mutate, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess,
  });

  const onGoogleLogin = () => {
    if (
      !process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
      !process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
    ) {
      return;
    }

    const googleOAuthUrl = getGoogleOAuthUrl(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    );
    window.location.href = googleOAuthUrl;
  };

  useEffect(() => {
    const accessToken = getGoogleAccessTokenFromPath();
    if (!accessToken) {
      return;
    }
    mutate({ token: accessToken });
  }, [mutate]);

  return {
    onGoogleLogin,
    isLoading: isPending,
  };
};
