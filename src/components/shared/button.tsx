import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/utils/styling';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  colorType?: 'primary' | 'red' | 'gray';
}

export function Button({
  children,
  variant = 'solid',
  size = 'md',
  colorType = 'primary',
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const solidStyle = cn(
    'text-white ',
    colorType === 'primary' &&
      'bg-teal-600 hover:bg-teal-700 active:bg-teal-800',
    colorType === 'red' && 'bg-red-500 hover:bg-red-600 active:bg-red-700',
    colorType === 'gray' && 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700',
  );

  const outlineStyle = cn(
    'bg-white border-[1px] border-solid hover:shadow-md active:bg-gray-100',
    colorType === 'primary' && 'text-primary border-primary',
    colorType === 'red' && 'text-red-500 border-red-500',
    colorType === 'gray' && 'text-gray-500 border-gray-500',
  );

  const sizeStyle = cn(
    size === 'sm' && 'text-sm py-[3px] px-3',
    size === 'md' && 'text-base py-[4px] px-4',
    size === 'lg' && 'text-lg py-[5px] px-6',
  );

  return (
    <button
      type="button"
      {...rest}
      className={cn(
        'rounded-md font-medium',
        sizeStyle,
        variant === 'solid' && solidStyle,
        variant === 'outline' && outlineStyle,
        rest.className,
      )}
    >
      {children}
    </button>
  );
}
