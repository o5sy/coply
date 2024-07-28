import { useReducer } from 'react';
import { getVideos } from '@/apis/videos';
import { Pagination, VideoList } from '@/components/explore-page';
import { usePagination } from '@/components/explore-page/pagination/hooks';
import { SearchInput, Separator, useSearchInput } from '@/components/shared';
import { useGetVideos } from './hooks';
import { updateSearchFilterReducer } from './reducers';
import { categoryItems, levelItems } from './constants';

const LIMIT_COUNT = 12;

export function ExploreContainer() {
  const { keywordFromParam, onKeyDown } = useSearchInput();

  const { currentPage, onPrev, onNext, onChange } = usePagination();

  const [filter, updateFilter] = useReducer(updateSearchFilterReducer, {
    level: 'all',
    category: 'all',
  });

  // todo useQuery 를 꺼내고, data 를 전달해서 필요한 객체로 리턴하는 함수를 만드는게 나을듯
  const { videos, totalCount } = useGetVideos({
    queryOptions: {
      queryKey: [
        'videos',
        { page: currentPage, keyword: keywordFromParam, filter },
      ],
      queryFn: () => {
        return getVideos({
          take: LIMIT_COUNT,
          page: currentPage,
          keyword: keywordFromParam,
          level: filter.level === 'all' ? undefined : filter.level,
          category: filter.category === 'all' ? undefined : filter.category,
        });
      },
      staleTime: 60 * 1000,
    },
  });

  const totalPage = Math.ceil(totalCount / LIMIT_COUNT);

  return (
    <main className="mb-[100px] w-full">
      <div className="layout">
        <div className="flex items-center justify-between py-[32px]">
          <h1 className="text-3xl font-bold">영상 탐색</h1>
          <SearchInput
            inputProps={{
              onKeyDown,
              defaultValue: keywordFromParam,
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
                {Array.from(levelItems).map(([key, label]) => {
                  return (
                    <label key={key} className="flex gap-[8px]">
                      <input
                        type="radio"
                        name="level"
                        value={key}
                        onChange={() =>
                          updateFilter({ type: 'level', payload: key })
                        }
                      />
                      {label}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* 주제 */}
            <fieldset>
              <legend className="text-md pb-[16px] font-bold">주제</legend>
              <div className="flex flex-col gap-[8px]">
                {Array.from(categoryItems).map(([key, label]) => {
                  return (
                    <label key={key} className="flex gap-[8px]">
                      <input
                        type="radio"
                        name="category"
                        value={key}
                        onChange={() =>
                          updateFilter({ type: 'category', payload: key })
                        }
                      />
                      {label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </aside>

          <div className="w-full">
            <div className="pb-[24px] text-xl">
              {keywordFromParam
                ? `"${keywordFromParam}" 검색 결과`
                : `${totalCount}건의 영상`}
            </div>
            <section className="flex w-full flex-col items-center justify-center">
              {/* 영상 리스트 */}
              {/* todo 없을 때 Nodata ui 표시 */}
              {videos ? <VideoList items={videos} /> : <div>nodata</div>}
              {/* 페이지네이션 */}
              <Pagination
                page={currentPage}
                totalPage={totalPage}
                onPrev={onPrev}
                onNext={onNext}
                onChange={onChange}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
