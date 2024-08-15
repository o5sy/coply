import { addVideoForAdmin } from '@/apis/admin';
import { AddVideoForAdminRequestParams } from '@/apis/models/admin';
import { AddVideoTable } from '@/components/admin/add-video-table';
import { Button } from '@/components/shared';
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ACCESS_TOKEN } from '@/constants/local-storage-key';
import { useLocalStorage } from '@/hooks';
import { getSession } from '@/utils/session';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useReducer } from 'react';
import { manageVideoReducer } from './reducers';
import { getInitialVideos } from './utils';

interface AddVideoDialogContentProps {
  onSuccess?: () => void;
}

export function AddVideoDialogContentContainer({
  onSuccess,
}: AddVideoDialogContentProps) {
  const queryClient = useQueryClient();

  const [videoItems, dispatch] = useReducer(
    manageVideoReducer,
    getInitialVideos(),
  );

  const [accessToken] = useLocalStorage(ACCESS_TOKEN, getSession());

  const { mutate } = useMutation({
    mutationFn: accessToken
      ? ({
          accessToken,
          params,
        }: {
          accessToken: string;
          params: AddVideoForAdminRequestParams;
        }) => addVideoForAdmin(accessToken, params)
      : undefined,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['admin', 'videos'],
      });
      onSuccess?.();
    },
  });

  const handleSave = () => {
    if (!accessToken) {
      return;
    }
    const videos = videoItems
      .filter((item) => !!item.videoId)
      .map<AddVideoForAdminRequestParams['videos'][number]>((item) => {
        return {
          videoId: item.videoId,
          categories: item.categories,
          level: item.levels.at(0) ?? 'BEGINNER',
        };
      });
    if (videos.length > 0) {
      mutate({ accessToken, params: { videos } });
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>영상 추가</DialogTitle>
      </DialogHeader>

      <AddVideoTable
        items={videoItems}
        onAdd={() => dispatch({ type: 'addItem' })}
        onRemove={(id) => dispatch({ type: 'removeItem', id })}
        onChangeVideoId={(id, videoId) =>
          dispatch({ type: 'updateVideoId', payload: { id, videoId } })
        }
        onCheckCategory={(id, category, checked) =>
          dispatch({
            type: 'updateCategory',
            payload: { id, category, checked },
          })
        }
        onCheckLevel={(id, level, checked) =>
          dispatch({ type: 'updateLevel', payload: { id, level, checked } })
        }
      />

      <DialogFooter>
        <DialogPrimitive.Close asChild>
          <Button>취소</Button>
        </DialogPrimitive.Close>
        <Button onClick={handleSave}>저장</Button>
      </DialogFooter>
    </>
  );
}
