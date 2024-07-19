import { PropsWithChildren } from 'react';

interface PopoverBackdropProps {
  onClick?: () => void;
}

export function PopoverBackdrop({
  children,
  onClick,
}: PropsWithChildren<PopoverBackdropProps>) {
  return (
    <div
      className="absolute left-0 top-0 h-full w-full bg-black/70"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
