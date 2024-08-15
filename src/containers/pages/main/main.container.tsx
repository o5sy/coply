import { Category, HeroCopy, SectionTitle } from '@/components/main-page';
import { SearchInput, useSearchInput } from '@/components/shared';
import { VideoItem, VideoList } from '@/components/shared/video-list';
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
      <section className="bg-primary/25">
        <div className="layout flex flex-col gap-[48px] py-[100px]">
          <HeroCopy />
          <SearchInput
            className="basis-x-[600px]"
            inputProps={{
              placeholder: '찾고 싶은 영상을 검색해보세요',
              onKeyDown,
            }}
          />
        </div>
      </section>

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
