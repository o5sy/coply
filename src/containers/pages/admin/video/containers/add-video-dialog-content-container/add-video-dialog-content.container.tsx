import { AddVideoTable } from '@/components/admin/add-video-table';
import { Button } from '@/components/shared';
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function AddVideoDialogContentContainer() {
  // const [videos, dispatch] = useReducer(manageVideoReducer, getInitialVideos());

  return (
    <>
      <DialogHeader>
        <DialogTitle>영상 추가</DialogTitle>
      </DialogHeader>

      <AddVideoTable onAdd={() => {}} />

      <DialogFooter>
        <Button>취소</Button>
        <Button>저장</Button>
      </DialogFooter>
    </>
  );
}
