import Link from 'next/link';
import { Button } from '../shared';
import { Logo } from './logo';
import { SearchInput } from './search-input';

export function Header() {
  return (
    <header className="flex h-[65px] w-full justify-center px-[200px]">
      <div className="flex h-full w-[1520px] items-center border-[1px]">
        {/* logo */}
        <div className="pr-[32px]">
          <Logo />
        </div>

        {/* search input */}
        <SearchInput className="w-[300px]" />

        {/* navigation */}
        <div className="flex flex-1 justify-end gap-[36px] px-[32px]">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
        </div>

        {/* login button */}
        <Button>로그인</Button>
      </div>
    </header>
  );
}
