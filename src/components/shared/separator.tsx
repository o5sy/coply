import { twMerge } from 'tailwind-merge';

interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return (
    <div
      className={twMerge(
        'border-[1px] border-solid border-gray-500',
        className,
      )}
    />
  );
}
