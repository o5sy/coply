import { InputHTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/utils/styling';

interface SearchInputProps {
  className?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export function SearchInput({ className, inputProps }: SearchInputProps) {
  return (
    <div
      className={cn('relative flex h-10 rounded-lg bg-slate-100', className)}
    >
      <div className="flex-center absolute h-10 w-10">
        <Image src="/search.svg" alt="search" width={18} height={18} />
      </div>
      <input
        placeholder="search"
        {...inputProps}
        className={cn('w-full rounded-lg pl-10 pr-4', inputProps?.className)}
      />
    </div>
  );
}
