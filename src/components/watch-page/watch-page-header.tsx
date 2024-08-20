import Link from 'next/link';
import MenuIcon from 'public/hamburger-menu.svg';
import ProfileIcon from 'public/profile.svg';
import { Button } from '../shared';

interface WatchPageHeaderProps {
  title: string;
  isLoggedIn?: boolean;
  onDrawerMenu: () => void;
  onUserMenu: () => void;
}

export function WatchPageHeader({
  title,
  isLoggedIn = false,
  onDrawerMenu,
  onUserMenu,
}: WatchPageHeaderProps) {
  return (
    <header className="flex h-[65px] w-full items-center bg-gray-800">
      {/* drawer menu button */}
      <button
        type="button"
        className="flex-center h-full w-[65px] hover:bg-gray-500"
        onClick={onDrawerMenu}
      >
        <MenuIcon stroke="white" alt="영상 정보" />
      </button>
      <h1 className="text-md line-clamp-2 pl-2 font-semibold text-white max-sm:text-sm">
        {title}
      </h1>

      {/* user menu button */}
      {isLoggedIn ? (
        <button
          className="ml-auto box-content flex-shrink-0 px-6"
          type="button"
          onClick={onUserMenu}
          aria-label="user menu"
        >
          <ProfileIcon width={36} height={36} />
        </button>
      ) : (
        <Link className="ml-auto flex-shrink-0 px-6" href="/signin">
          <Button>로그인</Button>
        </Link>
      )}
    </header>
  );
}
