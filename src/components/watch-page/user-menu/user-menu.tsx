import Link from 'next/link';
import styles from './user-menu.module.css';
import { twMerge } from 'tailwind-merge';

interface UserMenuProps {
  className?: string;
}

export function UserMenu({ className }: UserMenuProps) {
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
      <Link className={styles.menuItem} href="/mypage">
        마이페이지
      </Link>
      <button className={`${styles.menuItem} text-left`}>로그아웃</button>
    </div>
  );
}
