import { cn } from '@/utils/styling';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export function Button({
  children,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      type="button"
      {...rest}
      className={cn(
        'text-md h-[35px] rounded-lg bg-primary px-[30px] text-white',
        rest.className,
      )}
    >
      {children}
    </button>
  );
}
