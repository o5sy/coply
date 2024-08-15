import Link from 'next/link';
import { Button } from '../shared';

interface CategoryProps {
  text: string;
  href: string;
}
export function Category({ text, href }: CategoryProps) {
  return (
    <li>
      <Link href={href} className="flex">
        <Button
          variant="outline"
          size="lg"
          className="font-semibold text-gray-900"
        >
          {text}
        </Button>
      </Link>
    </li>
  );
}
