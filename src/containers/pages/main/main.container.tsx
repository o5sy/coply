import Image from 'next/image';
import { VideoItem, VideoList } from '@/components/explore-page';
import { Category, SectionTitle } from '@/components/main-page';
import { SearchInput, useSearchInput } from '@/components/shared';
import { categoryItems } from '@/constants/type-label-map';
import { INIT_CATEGORY_KEY } from '../explore/hooks';
import { useRecommendedVideos } from './hooks';
import { recommendedSections } from './models/main.model';
import { getVideoItems } from './utils/convert-response';

export function MainContainer() {
  const { onKeyDown } = useSearchInput();

  const recommendedVideos = useRecommendedVideos();

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
      {Array.from(recommendedSections).map(({ title, videoIds }) => {
        const videos: VideoItem[] = getVideoItems(videoIds, recommendedVideos);
        return (
          <section key={encodeURI(title)} className="layout pt-[48px]">
            <SectionTitle title={title} />
            <VideoList items={videos} />
          </section>
        );
      })}
    </main>
  );
}
