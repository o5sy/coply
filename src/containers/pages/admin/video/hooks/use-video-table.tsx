import {
  deleteVideoByIdForAdmin,
  updateVideoInfoByIdForAdmin,
} from '@/apis/admin';
import { UpdateVideoInfoByIdForAdminRequestParams } from '@/apis/models/admin';
import { GetVideoResponse } from '@/apis/models/video';
import { CategoryDropdown } from '@/components/admin/category-dropdown';
import { TableRowDef } from '@/components/admin/data-table/types/data-table.type';
import { LevelDropdown } from '@/components/admin/level-dropdown';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HEADERS } from '../constants/admin-video.constant';
import { DeleteVideoDialogContainer } from '../containers/delete-video-dialog-container';

interface UseVideoTableProps {
  videos?: GetVideoResponse[];
}

export const useVideoTable = ({ videos }: UseVideoTableProps) => {
  const queryClient = useQueryClient();

  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const deleteMutation = useMutation({
    mutationFn: accessToken
      ? ({ accessToken, videoId }: { accessToken: string; videoId: string }) =>
          deleteVideoByIdForAdmin(accessToken, videoId)
      : undefined,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'videos'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: accessToken
      ? ({
          accessToken,
          videoId,
          params,
        }: {
          accessToken: string;
          videoId: string;
          params: UpdateVideoInfoByIdForAdminRequestParams;
        }) => updateVideoInfoByIdForAdmin(accessToken, videoId, params)
      : undefined,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'videos'] });
    },
  });

  const handleDelete = (id: string) => {
    if (!accessToken) {
      return;
    }
    deleteMutation.mutate({ accessToken, videoId: id });
  };

  const handleUpdate = (
    id: string,
    params: UpdateVideoInfoByIdForAdminRequestParams,
  ) => {
    if (!accessToken) {
      return;
    }
    updateMutation.mutate({ accessToken, videoId: id, params });
  };

  const rows: TableRowDef[] =
    videos?.map((video) => ({
      key: video.id,
      columns: [
        <DeleteVideoDialogContainer
          key="remove"
          onDelete={() => handleDelete(video.id)}
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
          <CategoryDropdown
            category={video.category}
            onChange={(category) => handleUpdate(video.id, { category })}
          />
        </div>,
        <div key="level" className="line-clamp-1 w-[80px]">
          <LevelDropdown
            level={video.level}
            onChange={(level) => handleUpdate(video.id, { level })}
          />
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
