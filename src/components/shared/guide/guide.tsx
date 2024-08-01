import { ReactNode } from 'react';

interface GuideProps {
  text: string;
  subText?: string;
  bottomContents?: ReactNode;
}

export function Guide({ text, subText, bottomContents }: GuideProps) {
  return (
    <div className="flex-center flex-col">
      <h1 className="pt-[24px] text-3xl">{text}</h1>
      {subText && <div className="pt-[16px] text-lg">{subText}</div>}
      {bottomContents && <div className="pt-[24px]">{bottomContents}</div>}
    </div>
  );
}
