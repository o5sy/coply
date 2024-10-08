import { skipToken, useQuery } from '@tanstack/react-query';
import { getVideosForAdmin } from '@/apis/admin';
import { DataTable } from '@/components/admin/data-table/data-table';
import { DialogTriggerWrapper } from '@/components/admin/dialog-trigger-wrapper';
import { Button, Pagination } from '@/components/shared';
import { usePagination } from '@/components/shared/pagination/hooks';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';
import { AddVideoDialogContentContainer } from './containers/add-video-dialog-content-container';
import { useVideoTable } from './hooks';
import { useState } from 'react';

const LIMIT_COUNT = 20;

export function VideoContainer() {
  const [open, setOpen] = useState(false);

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
          open={open}
          onOpenChange={setOpen}
          trigger={<Button>+ 추가</Button>}
          dialogContent={
            <AddVideoDialogContentContainer onSuccess={() => setOpen(false)} />
          }
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
