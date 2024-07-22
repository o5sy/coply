import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface PageButtonProps {
  isActive?: boolean;
  onClick: () => void;
}

export function PageButton({
  children,
  isActive = false,
  onClick,
}: PropsWithChildren<PageButtonProps>) {
  return (
    <button
      type="button"
      className={twMerge(
        'flex-center h-[48px] w-[48px]',
        isActive && 'rounded-full bg-primary font-bold text-white',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
