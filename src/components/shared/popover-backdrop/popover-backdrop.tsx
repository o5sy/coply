import { PropsWithChildren, useEffect, useRef, MouseEvent } from 'react';
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
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClick?.();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  const handleClick = (e: MouseEvent) => {
    if (ref.current && ref.current === e.target) {
      onClick?.();
    }
  };

  return (
    <div
      ref={ref}
      className={cn('absolute left-0 top-0 h-full w-full', className)}
      onClick={handleClick}
      role="presentation"
    >
      {children}
    </div>
  );
}
