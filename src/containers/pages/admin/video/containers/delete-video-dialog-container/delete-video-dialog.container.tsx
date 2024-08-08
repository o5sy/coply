import { useState } from 'react';
import { DeleteVideoDialogContent } from '@/components/admin/delete-video-dialog-content';
import { DialogTriggerWrapper } from '@/components/admin/dialog-trigger-wrapper';
import { Button } from '@/components/shared';

interface DeleteVideoDialogContentProps {
  onDelete: () => void;
}

export function DeleteVideoDialogContainer({
  onDelete,
}: DeleteVideoDialogContentProps) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    onDelete();
    setOpen(false);
  };

  return (
    <DialogTriggerWrapper
      key="remove"
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>X</Button>}
      dialogContent={<DeleteVideoDialogContent onDelete={handleDelete} />}
    />
  );
}
