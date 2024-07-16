import Link from 'next/link';
import { Button } from '../shared';
import { Logo } from './logo';
import { SearchInput } from './search-input';

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-white">
      <nav className="layout flex h-[65px] items-center">
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
