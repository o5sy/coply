import { ReactNode } from 'react';
import { DialogProps } from '@radix-ui/react-dialog';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export interface DialogTriggerWrapperProps extends DialogProps {
  trigger: ReactNode;
  dialogContent: ReactNode;
}

export function DialogTriggerWrapper({
  trigger,
  dialogContent,
  ...props
}: DialogTriggerWrapperProps) {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>{dialogContent}</DialogContent>
    </Dialog>
  );
}
