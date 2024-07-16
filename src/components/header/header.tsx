import Link from 'next/link';
import { Button } from '../shared';
import { Logo } from './logo';
import { SearchInput } from './search-input';

export function Header() {
  return (
    <header className="absolute z-10 w-full">
      <nav className="mx-auto box-content flex h-[65px] max-w-[1440px] items-center px-[32px]">
        {/* logo */}
        <Link href="/" className="pr-[32px]">
          <Logo />
        </Link>

        {/* search input */}
        <SearchInput className="w-[300px]" />

        {/* navigation */}
        <div className="flex flex-1 justify-end gap-[36px] px-[32px]">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
        </div>

        {/* login button */}
        <Button>로그인</Button>
      </nav>
    </header>
  );
}
