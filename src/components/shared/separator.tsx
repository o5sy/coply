import { cn } from '@/utils/styling';

interface SeparatorProps {
  className?: string;
}

// todo 삭제
export function Separator({ className }: SeparatorProps) {
  return (
    <div
      className={cn('border-b-[1px] border-solid border-gray-500', className)}
    />
  );
}
