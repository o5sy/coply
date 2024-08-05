import { skipToken, useQuery } from '@tanstack/react-query';
import { getViewingHistoriesByVideoId } from '@/apis/users';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';

export const useLatestWatchTime = (videoId?: string) => {
  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { data } = useQuery({
    queryKey: ['viewing-histories', { videoId }],
    queryFn:
      videoId && accessToken
        ? () => {
            return getViewingHistoriesByVideoId(videoId, accessToken);
          }
        : skipToken,
    enabled: !!accessToken && !!videoId,
  });

  return data?.watchTime || 0;
};
