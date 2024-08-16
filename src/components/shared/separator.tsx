import { cn } from '@/utils/styling';

interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return (
    <div
      className={cn('border-[1px] border-solid border-gray-500', className)}
    />
  );
}
