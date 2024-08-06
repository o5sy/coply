import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface DialogTriggerWrapperProps {
  trigger: ReactNode;
  dialogContent: ReactNode;
}

export function DialogTriggerWrapper({
  trigger,
  dialogContent,
}: DialogTriggerWrapperProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>{dialogContent}</DialogContent>
    </Dialog>
  );
}
