import Link from 'next/link';
import { Button, SearchInput } from '../shared';
import { useSearchInput } from '../shared/search-input/use-search-input';
import { Logo } from './logo';

export function Header() {
  const { defaultKeyword, onKeyDown } = useSearchInput();

  return (
    <header className="sticky left-0 top-0 z-10 w-full bg-white">
      <div className="layout flex h-[65px] items-center">
        {/* logo */}
        <Link href="/" className="pr-[32px]">
          <Logo />
        </Link>

        {/* search input */}
        <SearchInput
          className="w-[300px]"
          inputProps={{
            onKeyDown,
            defaultValue: defaultKeyword,
          }}
        />

        {/* navigation */}
        <nav className="flex flex-1 justify-end gap-[36px] px-[32px]">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
        </nav>

        {/* login button */}
        <Link href="/signin">
          <Button>로그인</Button>
        </Link>
      </div>
    </header>
  );
}
