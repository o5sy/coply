import { skipToken, useInfiniteQuery } from '@tanstack/react-query';
import { getViewingHistories } from '@/apis/users';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';

interface UseWatchingHistoryProps {
  takeCount: number;
}

export const useWatchingHistory = ({ takeCount }: UseWatchingHistoryProps) => {
  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['viewing-histories'],
    queryFn: accessToken
      ? ({ pageParam }) => {
          return getViewingHistories(accessToken, {
            cursor: pageParam || undefined,
            take: takeCount,
          });
        }
      : skipToken,
    enabled: !!accessToken,
    getNextPageParam: (lastPage) =>
      lastPage.hasNextCursor ? lastPage.nextCursor : undefined,
    initialPageParam: '',
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.items),
      pageParams: data.pageParams,
    }),
  });

  const fetchMore = () => {
    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }
  };

  return {
    data: data?.pages ?? [],
    fetchMore,
  };
};
