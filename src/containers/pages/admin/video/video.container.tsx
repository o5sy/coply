/* eslint-disable @typescript-eslint/no-use-before-define */
import { skipToken, useQuery } from '@tanstack/react-query';
import { CategoryDropdown } from '@/components/admin/category-dropdown';
import { getVideosForAdmin } from '@/apis/admin';
import { DataTable } from '@/components/admin/data-table/data-table';
import {
  TableHeaderDef,
  TableRowDef,
} from '@/components/admin/data-table/types/data-table.type';
import { DeleteVideoDialogContent } from '@/components/admin/delete-video-dialog-content';
import { DialogTriggerWrapper } from '@/components/admin/dialog-trigger-wrapper';
import { LevelDropdown } from '@/components/admin/level-dropdown';
import { Pagination } from '@/components/explore-page';
import { usePagination } from '@/components/explore-page/pagination/hooks';
import { Button } from '@/components/shared';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';
import { AddVideoDialogContentContainer } from './containers/add-video-dialog-content-container';

const LIMIT_COUNT = 20;

export function VideoContainer() {
  // todo pagination 훅, 컴포넌트 공용으로 분리
  const { currentPage, onPrev, onNext, onChange } = usePagination();

  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { data: videos } = useQuery({
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

  const totalPage = videos ? Math.ceil(videos.total / LIMIT_COUNT) : 0;

  const rows: TableRowDef[] =
    videos?.items.map((video) => ({
      key: video.id,
      columns: [
        <DialogTriggerWrapper
          key="remove"
          trigger={<Button>X</Button>}
          dialogContent={<DeleteVideoDialogContent />}
        />,
        <div key="id" className="w-[100px]">
          {video.id}
        </div>,
        <div key="name" className="line-clamp-1 w-[300px]">
          {video.name}
        </div>,
        <div key="description" className="line-clamp-1 w-[200px]">
          {video.description}
        </div>,
        <div key="category" className="line-clamp-1 w-[80px]">
          <CategoryDropdown category={video.category} onSelect={console.log} />
        </div>,
        <div key="level" className="line-clamp-1 w-[80px]">
          <LevelDropdown levels={[video.level]} onCheck={console.log} />
        </div>,
        <div key="channelName" className="line-clamp-1 w-[100px]">
          {video.videoChannel.name}
        </div>,
      ],
      className: 'text-base',
    })) ?? [];

  return (
    <main className="layout pt-10">
      <div className="flex justify-between">
        <h1 className="text-4xl">Videos</h1>
        <DialogTriggerWrapper
          trigger={<Button>+ 추가</Button>}
          dialogContent={<AddVideoDialogContentContainer />}
        />
      </div>
      <div className="overflow-auto">
        <DataTable headers={HEADERS} rows={rows} />
      </div>
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

const HEADERS: TableHeaderDef[] = [
  { key: 'remove', contents: '' },
  { key: 'id' },
  { key: 'name', contents: '제목' },
  { key: 'description', contents: '설명' },
  { key: 'category', contents: '카테고리' },
  { key: 'level', contents: '난이도' },
];
