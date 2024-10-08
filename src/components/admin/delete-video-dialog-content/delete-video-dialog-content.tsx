import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Button } from '@/components/shared';
import {
  DialogHeader,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

interface DeleteVideoDialogContentProps {
  onDelete: () => void;
}

export function DeleteVideoDialogContent({
  onDelete,
}: DeleteVideoDialogContentProps) {
  return (
    <>
      <DialogHeader>
        <DialogPrimitive.DialogTitle>영상 삭제</DialogPrimitive.DialogTitle>
      </DialogHeader>
      정말 삭제하시겠습니까?
      <DialogFooter>
        <DialogClose asChild>
          <Button>취소</Button>
        </DialogClose>
        <Button onClick={onDelete}>삭제</Button>
      </DialogFooter>
    </>
  );
}
