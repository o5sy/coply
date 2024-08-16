import Link from 'next/link';
import ProfileIcon from 'public/profile.svg';
import { Button, SearchInput, useSearchInput } from '../shared';
import { Logo } from './logo';

interface HeaderProps {
  isLoggedIn?: boolean;
}

export function Header({ isLoggedIn = false }: HeaderProps) {
  const { keywordFromParam, onKeyDown } = useSearchInput();

  return (
    <header className="sticky left-0 top-0 z-10 w-full bg-white">
      <div className="layout flex h-[65px] items-center">
        {/* logo */}
        <Link href="/" className="pr-[32px]">
          <Logo />
        </Link>

        {/* search input */}
        <SearchInput
          className="w-[300px] max-sm:hidden"
          inputProps={{
            onKeyDown,
            defaultValue: keywordFromParam,
          }}
        />

        {/* navigation */}
        <nav className="flex flex-1 justify-end gap-[36px] px-[32px]">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
        </nav>

        {isLoggedIn ? (
          <Link href="/user">
            <ProfileIcon width={36} height={36} />
          </Link>
        ) : (
          <Link href="/signin">
            <Button>로그인</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
