import { getViewingHistories } from '@/apis/users';
import { SectionTitle } from '@/components/main-page';
import { VideoHistoryCard } from '@/components/user-page';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';
import { skipToken, useInfiniteQuery } from '@tanstack/react-query';
import { UserSectionContainer } from './containers/user-section.container';

const TAKE_COUNT = 12;

export function UserContainer() {
  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['viewing-histories'],
    queryFn: accessToken
      ? ({ pageParam }) => {
          return getViewingHistories(accessToken, {
            cursor: pageParam || undefined,
            take: 1, // 테스트 중
          });
        }
      : skipToken,
    enabled: !!accessToken,
    getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
    initialPageParam: '',
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.items),
      pageParams: data.pageParams,
    }),
  });

  // const handleFetchMore = () => {
  //   if (hasNextPage && !isFetching) {
  //     fetchNextPage();
  //   }
  // };

  const watchingHistory = data?.pages ?? [];

  return (
    <main className="mb-[100px] w-full">
      <div className="layout">
        {/* <button onClick={handleFetchMore}>dd</button> */}

        {/* 유저 정보 */}
        <UserSectionContainer />

        {/* 시청 기록 */}
        <section className="pt-[48px]">
          <SectionTitle title="시청 기록" />
          <ul className="grid w-full grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[24px]">
            {watchingHistory.map(({ video }) => (
              <VideoHistoryCard
                key={video.id}
                className="w-[unset]"
                thumbnailUrl={video.thumbnailImageUrl}
                href={`/watch?=${video.id}`}
                title={video.name}
                channelName={video.videoChannel.name}
                progressRatio={100}
                onDelete={() => {}}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
