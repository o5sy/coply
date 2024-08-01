/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import { SectionTitle, Category, VideoCard } from '@/components/main-page';
import { SearchInput, useSearchInput } from '@/components/shared';
import { categoryItems } from '@/constants/type-label-map';
import { INIT_CATEGORY_KEY } from '../explore/hooks';
import { useQueries } from '@tanstack/react-query';
import { recommendedSections } from './models/main.model';
import { getVideoById } from '@/apis/videos';
import { GetVideoResponse } from '@/apis/models/video';

export function MainContainer() {
  const { onKeyDown } = useSearchInput();

  const videoIds = recommendedSections.flatMap((section) => section.videoIds);

  const videos = useQueries<
    GetVideoResponse[],
    Record<string, GetVideoResponse>
  >({
    queries: videoIds.map((videoId) => {
      return {
        queryKey: ['videos', { videoId }],
        queryFn: () => getVideoById(videoId),
      };
    }),
    combine: (results) => {
      const videos = results
        .map((result) => result.data)
        .filter((data): data is GetVideoResponse => !!data);
      return videos.reduce((acc, video) => {
        return {
          ...acc,
          [video.id]: video,
        };
      }, {});
    },
  });

  return (
    <main className="mb-[100px] w-full">
      {/* hero */}
      <section className="layout flex-center pt-[32px]">
        <Image src="/hero.png" width={1200} height={320} alt="로드맵 이미지" />
      </section>

      {/* search */}
      <div className="layout flex-center pt-[24px]">
        <SearchInput
          className="w-full"
          inputProps={{
            placeholder: '배우고 싶은 지식을 입력해보세요.',
            onKeyDown,
          }}
        />
      </div>

      {/* category */}
      <section className="layout pt-[48px]">
        <SectionTitle title="카테고리 🗂️" />
        <ul className="flex flex-wrap gap-[16px]">
          {Array.from(categoryItems).map(([key, label]) => (
            <Category
              key={key}
              text={label}
              href={`/explore?${INIT_CATEGORY_KEY}=${key}`}
            />
          ))}
        </ul>
      </section>

      {/* recommended videos */}
      {Array.from(recommendedSections).map(({ title, videoIds }, index) => (
        <section key={index} className="layout pt-[48px]">
          <SectionTitle title={title} />
          <ul className="flex flex-wrap justify-between gap-[12px]">
            {videoIds.map((id) => {
              const video = videos[id];
              if (!video) {
                return null;
              }
              return (
                <VideoCard
                  key={id}
                  name={video.name}
                  channelName={video.videoChannel.name}
                  thumbnailUrl={video.thumbnailImageUrl}
                  href={`/watch/${id}`}
                />
              );
            })}
          </ul>
        </section>
      ))}
    </main>
  );
}
