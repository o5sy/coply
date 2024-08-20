import Image from 'next/image';
import { useReducer } from 'react';
import { getVideos } from '@/apis/videos';
import {
  Button,
  Guide,
  Pagination,
  Portal,
  SearchInput,
  Separator,
  useSearchInput,
} from '@/components/shared';
import { usePagination } from '@/components/shared/pagination/hooks';
import { VideoList } from '@/components/shared/video-list';
import { ExploreFilter } from '@/components/watch-page/explore-filter';
import { useOpenState } from '@/hooks';
import { useDetectCategoryFromParam, useGetVideos } from './hooks';
import {
  UpdateSearchFilterAction,
  updateSearchFilterReducer,
} from './reducers';
import { FilterDrawer } from '@/components/watch-page/filter-drawer';

const LIMIT_COUNT = 12;

export function ExploreContainer() {
  const { keywordFromParam, onKeyDown } = useSearchInput();

  const { currentPage, onPrev, onNext, onChange } = usePagination();

  const [filter, updateFilter] = useReducer(updateSearchFilterReducer, {
    level: 'all',
    categories: [],
  });

  const handleUpdate = (action: UpdateSearchFilterAction) => {
    updateFilter(action);
    onChange(1);
  };

  useDetectCategoryFromParam({
    onDetect: (category) => {
      updateFilter({
        type: 'categories',
        payload: { category, checked: true },
      });
    },
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
          keyword: keywordFromParam || undefined,
          level: filter.level === 'all' ? undefined : filter.level,
          categories: filter.categories,
        });
      },
      staleTime: 60 * 1000,
    },
  });

  const totalPage = Math.ceil(totalCount / LIMIT_COUNT);

  const { isOpen, handleState } = useOpenState();

  // 사이즈 크면: 기본 필터 -> ok
  // 작으면: 기본 필터 표시 x, 버튼 표시 -> ok
  // drawer ui: 필터 텍스트, 필터, 닫기 버튼 -> ok
  // 버튼 클릭하면 drawer 표시 -> ok
  // 닫기 버튼 클릭 시 닫힘 -> ok
  // todo drawer 열린 상태에서 사이즈 커지면 닫힘
  // 컴포넌트 분리

  return (
    <main className="mb-[100px] w-full">
      <div className="layout">
        <div className="flex flex-col gap-3 py-[32px] md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold">영상 탐색</h1>
          <SearchInput
            inputProps={{
              onKeyDown,
              defaultValue: keywordFromParam,
            }}
          />
        </div>

        <div className="flex w-full flex-col gap-[24px] md:flex-row">
          {/* todo 3. responsive filter 분리 */}
          {/* 필터 */}
          {/* 반응형 작업 임시 hidden 설정 */}
          <div className="w-1/4 min-w-[150px] max-md:hidden">
            <aside className="flex w-full flex-col gap-[24px]">
              <div className="text-xl">필터</div>
              <Separator className="border-black" />
              <ExploreFilter
                level={filter.level}
                categories={filter.categories}
                onLevelChange={(level) => {
                  handleUpdate({ type: 'level', payload: level });
                }}
                onCategoryChange={(category, checked) => {
                  handleUpdate({
                    type: 'categories',
                    payload: { category, checked },
                  });
                }}
              />
            </aside>
          </div>

          {/* todo 4. radix 참고해서 drawer, drawerTrigger, drawerContents 로 추상화 */}
          {/*  */}
          <div className="hidden max-md:flex">
            <Button
              variant="outline"
              colorType="gray"
              onClick={handleState.open}
            >
              필터
            </Button>
          </div>

          {isOpen && (
            <FilterDrawer
              filterProps={{
                level: filter.level,
                categories: filter.categories,
                onLevelChange: (level) => {
                  handleUpdate({ type: 'level', payload: level });
                },
                onCategoryChange: (category, checked) => {
                  handleUpdate({
                    type: 'categories',
                    payload: { category, checked },
                  });
                },
              }}
              onClose={handleState.close}
            />
          )}

          <div className="w-full">
            <div className="pb-[24px] text-xl">
              {keywordFromParam
                ? `"${keywordFromParam}" 검색 결과`
                : `${totalCount}건의 영상`}
            </div>
            <section className="flex w-full flex-col items-center justify-center">
              {/* 영상 리스트 */}
              {videos?.length ? (
                <>
                  <VideoList items={videos} />
                  <Pagination
                    page={currentPage}
                    totalPage={totalPage}
                    onPrev={onPrev}
                    onNext={onNext}
                    onChange={onChange}
                  />
                </>
              ) : (
                <Guide text="검색 결과가 없습니다" />
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
