import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export function Button({
  children,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={`text-md h-[35px] rounded-lg bg-primary px-[30px] text-white ${rest.className ? rest.className : ''}`}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
