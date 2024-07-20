import MenuIcon from 'public/hamburger-menu.svg';
import ProfileIcon from 'public/profile.svg';

interface WatchPageHeaderProps {
  title: string;
  onDrawerMenu: () => void;
  onUserMenu: () => void;
}

export function WatchPageHeader({
  title,
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
      <h1 className="pl-[8px] text-lg font-semibold text-white">{title}</h1>

      {/* user menu button */}
      <button
        className="ml-auto box-content px-[24px]"
        type="button"
        onClick={onUserMenu}
        aria-label="user menu"
      >
        <ProfileIcon width={36} height={36} />
      </button>
    </header>
  );
}
