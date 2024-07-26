import { GetVideosResponse } from '@/apis/models/video';
import { getVideos } from '@/apis/videos';
import { Pagination, VideoItem, VideoList } from '@/components/explore-page';
import { SearchInput, Separator, useSearchInput } from '@/components/shared';
import { useQuery } from '@tanstack/react-query';

export function ExploreContainer() {
  const { defaultKeyword, onKeyDown } = useSearchInput();

  const { data } = useQuery<GetVideosResponse>({
    queryKey: ['videos'],
    queryFn: () => getVideos(),
  });

  const videos = data?.items.map<VideoItem>((video) => {
    return {
      id: video.id.toString(),
      name: video.name,
      channelName: video.videoChannel.name,
      thumbnailUrl: video.thumbnailImageUrl,
    };
  });

  const totalCount = data?.total ?? 0;

  return (
    <main className="mb-[100px] w-full">
      <div className="layout">
        <div className="flex items-center justify-between py-[32px]">
          <h1 className="text-3xl font-bold">영상 탐색</h1>
          <SearchInput
            inputProps={{
              onKeyDown,
              defaultValue: defaultKeyword,
            }}
          />
        </div>

        <div className="flex w-full gap-[24px]">
          {/* 필터 */}
          <aside className="flex w-[300px] flex-col gap-[24px]">
            <div className="text-xl">필터</div>
            <Separator className="border-black" />

            {/* 난이도 */}
            <fieldset>
              <legend className="text-md pb-[16px] font-bold">난이도</legend>
              <div className="flex flex-col gap-[8px]">
                {['입문', '초급', '중급 이상'].map((level) => {
                  return (
                    <label key={level} className="flex gap-[8px]">
                      <input type="checkbox" name="level" value={level} />
                      {level}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* 주제 */}
            <fieldset>
              <legend className="text-md pb-[16px] font-bold">주제</legend>
              <div className="flex flex-col gap-[8px]">
                {['전체', 'FE', 'BE', '취업 준비', 'CS', '알고리즘'].map(
                  (level) => {
                    return (
                      <label key={level} className="flex gap-[8px]">
                        <input type="radio" name="level" value={level} />
                        {level}
                      </label>
                    );
                  },
                )}
              </div>
            </fieldset>
          </aside>

          <div className="w-full">
            <div className="pb-[24px] text-xl">
              {defaultKeyword
                ? `"${defaultKeyword}" 검색 결과`
                : `${totalCount}건의 영상`}
            </div>
            <section className="flex w-full flex-col items-center justify-center">
              {/* 영상 리스트 */}
              {/* todo 없을 때 Nodata ui 표시 */}
              {videos ? <VideoList items={videos} /> : <div>nodata</div>}
              {/* 페이지네이션 */}
              <Pagination totalPage={10} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
