import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import {
  ScreenSize,
  useOpenState,
  usePreventScroll,
  useScreenSize,
} from '@/hooks';
import { Button, PopoverBackdrop } from '../shared';
import { Logo } from './logo';

interface MobileHeaderProps {
  isLoggedIn?: boolean;
}

const MENU_ITEM_STYLE =
  'rounded-md px-2 py-2 text-center text-lg hover:bg-gray-100';

export function MobileHeader({ isLoggedIn = false }: MobileHeaderProps) {
  const { isOpen, handleState } = useOpenState();

  const { screenSize } = useScreenSize();

  useEffect(() => {
    if (screenSize <= ScreenSize.medium) {
      return;
    }
    if (isOpen) {
      handleState.close();
    }
  }, [screenSize, isOpen, handleState]);

  usePreventScroll({ scrollable: !isOpen });

  return (
    <>
      <div className="layout flex h-[65px] items-center">
        {/* logo */}
        <Link href="/" className="pr-[32px]">
          <Logo />
        </Link>

        {/* hamburger menu */}
        <button
          className="ml-auto p-3"
          type="button"
          onClick={handleState.toggle}
        >
          {isOpen ? (
            <Image src="close.svg" alt="메뉴 닫기" width={30} height={30} />
          ) : (
            <Image
              src="hamburger-menu.svg"
              alt="메뉴 열기"
              width={30}
              height={30}
            />
          )}
        </button>
      </div>

      {isOpen && (
        <PopoverBackdrop
          className="top-[65px] h-screen bg-black/70"
          onClick={handleState.close}
        >
          <div className="flex w-full flex-col gap-3 bg-white px-5 pb-7 text-gray-800 shadow-md">
            <Link
              className={MENU_ITEM_STYLE}
              href="/"
              onClick={handleState.close}
            >
              홈
            </Link>
            <Link
              className={MENU_ITEM_STYLE}
              href="/explore"
              onClick={handleState.close}
            >
              탐색
            </Link>
            {isLoggedIn ? (
              <Link className={MENU_ITEM_STYLE} href="/user">
                마이페이지
              </Link>
            ) : (
              <Link href="/signin">
                <Button className="w-full" variant="outline" size="lg">
                  로그인
                </Button>
              </Link>
            )}
          </div>
        </PopoverBackdrop>
      )}
    </>
  );
}
