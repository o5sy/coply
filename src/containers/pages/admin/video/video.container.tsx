import { skipToken, useQuery } from '@tanstack/react-query';
import { getVideosForAdmin } from '@/apis/admin';
import { DataTable } from '@/components/admin/data-table/data-table';
import { DialogTriggerWrapper } from '@/components/admin/dialog-trigger-wrapper';
import { Pagination } from '@/components/explore-page';
import { usePagination } from '@/components/explore-page/pagination/hooks';
import { Button } from '@/components/shared';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';
import { AddVideoDialogContentContainer } from './containers/add-video-dialog-content-container';
import { useVideoTable } from './hooks';

const LIMIT_COUNT = 20;

export function VideoContainer() {
  // todo pagination 훅, 컴포넌트 공용으로 분리
  const { currentPage, onPrev, onNext, onChange } = usePagination();

  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { data } = useQuery({
    queryKey: ['admin', 'videos', { page: currentPage }],
    queryFn: accessToken
      ? () => {
          return getVideosForAdmin(accessToken, {
            page: currentPage,
            take: LIMIT_COUNT,
          });
        }
      : skipToken,
  });

  const { headers, rows } = useVideoTable({ videos: data?.items });

  const totalPage = data ? Math.ceil(data.total / LIMIT_COUNT) : 0;

  return (
    <main className="layout pt-10">
      {/* title */}
      <div className="flex justify-between">
        <h1 className="text-4xl">Videos</h1>
        <DialogTriggerWrapper
          trigger={<Button>+ 추가</Button>}
          dialogContent={<AddVideoDialogContentContainer />}
        />
      </div>

      {/* table */}
      <div className="overflow-auto">
        <DataTable headers={headers} rows={rows} />
      </div>

      {/* pagination */}
      <div className="flex justify-center pt-10">
        <Pagination
          page={currentPage}
          totalPage={totalPage}
          onPrev={onPrev}
          onNext={onNext}
          onChange={onChange}
        />
      </div>
    </main>
  );
}
