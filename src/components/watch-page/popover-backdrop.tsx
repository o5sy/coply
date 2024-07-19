import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface PopoverBackdropProps {
  className?: string;
  onClick?: () => void;
}

export function PopoverBackdrop({
  children,
  className,
  onClick,
}: PropsWithChildren<PopoverBackdropProps>) {
  return (
    <div
      className={twMerge('absolute left-0 top-0 h-full w-full', className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
