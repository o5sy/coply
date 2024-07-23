import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface SearchInputProps extends LabelHTMLAttributes<HTMLLabelElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export function SearchInput({ inputProps, ...rest }: SearchInputProps) {
  return (
    <label
      {...rest}
      className={twMerge(
        'flex gap-[8px] rounded-lg bg-secondary px-[16px] py-[8px]',
        rest.className,
      )}
    >
      <Image src="/search.svg" alt="search" width={18} height={18} />
      <input
        placeholder="search"
        {...inputProps}
        className={twMerge('flex-1 text-primary', inputProps?.className)}
      />
    </label>
  );
}
