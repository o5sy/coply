import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

import Image from 'next/image';

interface SearchInputProps extends LabelHTMLAttributes<HTMLLabelElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export function SearchInput({ inputProps, ...rest }: SearchInputProps) {
  return (
    <label
      {...rest}
      className={`flex gap-[8px] rounded-lg bg-secondary px-[16px] py-[8px] ${rest.className}`}
    >
      <Image src="/search.svg" alt="search" width={18} height={18} />
      <input
        placeholder="search"
        {...inputProps}
        className={`flex-1 text-primary ${inputProps?.className ? inputProps.className : ''}`}
      />
    </label>
  );
}
