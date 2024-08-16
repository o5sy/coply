import { Header } from './header-contents';
import { MobileHeader } from './mobile-header-contents';

interface ResponsiveHeaderProps {
  isLoggedIn?: boolean;
}

export function ResponsiveHeader({
  isLoggedIn = false,
}: ResponsiveHeaderProps) {
  return (
    <header className="sticky left-0 top-0 z-10 w-full bg-white">
      {/* default */}
      <div className="hidden md:block">
        <Header isLoggedIn={isLoggedIn} />
      </div>

      {/* mobile */}
      <div className="block md:hidden">
        <MobileHeader isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}
