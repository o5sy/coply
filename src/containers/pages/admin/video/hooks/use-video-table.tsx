import { GetVideoResponse } from '@/apis/models/video';
import { CategoryDropdown } from '@/components/admin/category-dropdown';
import { TableRowDef } from '@/components/admin/data-table/types/data-table.type';
import { DeleteVideoDialogContent } from '@/components/admin/delete-video-dialog-content';
import { DialogTriggerWrapper } from '@/components/admin/dialog-trigger-wrapper';
import { LevelDropdown } from '@/components/admin/level-dropdown';
import { Button } from '@/components/shared';
import { HEADERS } from '../constants/admin-video.constant';

interface UseVideoTableProps {
  videos?: GetVideoResponse[];
}

export const useVideoTable = ({ videos }: UseVideoTableProps) => {
  const rows: TableRowDef[] =
    videos?.map((video) => ({
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

  return {
    headers: HEADERS,
    rows,
  };
};
