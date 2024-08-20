import { useReducer } from 'react';
import FilterIcon from 'public/filter.svg';
import { getVideos } from '@/apis/videos';
import {
  Button,
  Guide,
  Pagination,
  SearchInput,
  useSearchInput,
} from '@/components/shared';
import { usePagination } from '@/components/shared/pagination/hooks';
import { VideoList } from '@/components/shared/video-list';
import { ExploreFilter } from '@/components/watch-page/explore-filter';
import { FilterDrawer } from '@/components/watch-page/filter-drawer';
import {
  useDetectCategoryFromParam,
  useGetVideos,
  useOpenFilterDrawer,
} from './hooks';
import {
  UpdateSearchFilterAction,
  updateSearchFilterReducer,
} from './reducers';

const LIMIT_COUNT = 12;

export function ExploreContainer() {
  const { keywordFromParam, onKeyDown } = useSearchInput();

  const { currentPage, onPrev, onNext, onChange } = usePagination();

  const [filter, updateFilter] = useReducer(updateSearchFilterReducer, {
    level: 'all',
    categories: [],
  });

  const { isOpenFilterDrawer, handleFilterDrawer } = useOpenFilterDrawer();

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

  const handleUpdate = (action: UpdateSearchFilterAction) => {
    updateFilter(action);
    onChange(1);
  };

  const totalPage = Math.ceil(totalCount / LIMIT_COUNT);

  return (
    <>
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
            {/* 필터 */}
            <aside className="w-1/4 min-w-[150px] max-md:hidden">
              <div className="separate-line pb-6 text-xl">필터</div>
              <ExploreFilter
                className="py-5"
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

            <div className="w-full">
              <div className="flex justify-between gap-1 pb-6">
                <span className="text-xl">
                  {keywordFromParam
                    ? `"${keywordFromParam}" 검색 결과`
                    : `${totalCount}건의 영상`}
                </span>
                {/* todo radix 참고해서 drawer, drawerTrigger, drawerContents 로 추상화 */}
                <Button
                  className="hidden items-center max-md:flex max-md:gap-1"
                  colorType="gray"
                  variant="outline"
                  onClick={handleFilterDrawer.open}
                >
                  <FilterIcon className="[&>path]:fill-gray-500" />
                  필터
                </Button>
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

      {/* 모바일 사이즈에서의 필터 */}
      {isOpenFilterDrawer && (
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
          onClose={handleFilterDrawer.close}
        />
      )}
    </>
  );
}
