import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/flag.svg" alt="logo" width={28} height={28} />
      <span className="text-2xl text-primary">Coply</span>
    </div>
  );
}
