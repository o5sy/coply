import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Button } from '@/components/shared';
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';

export function DeleteVideoDialogContent() {
  return (
    <>
      <DialogHeader>
        <DialogPrimitive.DialogTitle>영상 삭제</DialogPrimitive.DialogTitle>
      </DialogHeader>
      정말 삭제하시겠습니까?
      <DialogFooter>
        <DialogPrimitive.Close asChild>
          <Button>취소</Button>
        </DialogPrimitive.Close>
        <Button>저장</Button>
      </DialogFooter>
    </>
  );
}
