import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

interface GoogleButtonProps {
  onClick: () => void;
  disabled?: boolean;
}
export function GoogleButton({ onClick, disabled }: GoogleButtonProps) {
  return (
    <button
      className="flex h-[40px] items-center gap-[24px] rounded-sm bg-white px-[8px] shadow-lg"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <Image src="/google.svg" alt="google" width={18} height={18} />
      <span className={`text-[14px] text-[#000]/[.54] ${roboto.className}`}>
        구글로 시작하기
      </span>
    </button>
  );
}
