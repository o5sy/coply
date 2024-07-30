import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import styles from './user-menu.module.css';

interface UserMenuProps {
  className?: string;
  onSignOut: () => void;
}

export function UserMenu({ className, onSignOut }: UserMenuProps) {
  return (
    <div
      className={twMerge(
        'flex w-[200px] flex-col rounded-lg bg-gray-600 p-[16px]',
        className,
      )}
    >
      <Link className={styles.menuItem} href="/">
        홈
      </Link>
      <Link className={styles.menuItem} href="/user">
        마이페이지
      </Link>
      <button
        className={`${styles.menuItem} text-left`}
        type="button"
        onClick={onSignOut}
      >
        로그아웃
      </button>
    </div>
  );
}
