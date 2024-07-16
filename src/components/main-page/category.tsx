import Link from 'next/link';

interface CategoryProps {
  text: string;
  href: string;
}
export function Category({ text, href }: CategoryProps) {
  return (
    <li>
      <Link href={href} className="flex">
        <span className="rounded-md border-[1px] border-solid border-primary px-[16px] py-[12px] font-bold">
          {text}
        </span>
      </Link>
    </li>
  );
}
