import { PropsWithChildren, useEffect } from 'react';
import { cn } from '@/utils/styling';

interface PopoverBackdropProps {
  className?: string;
  onClick?: () => void;
}

export function PopoverBackdrop({
  children,
  className,
  onClick,
}: PropsWithChildren<PopoverBackdropProps>) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClick?.();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div
      className={cn('absolute left-0 top-0 h-full w-full', className)}
      onClick={onClick}
      role="presentation"
    >
      {children}
    </div>
  );
}
