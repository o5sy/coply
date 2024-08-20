import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/utils/styling';
import { Logo } from '../responsive-header/logo';

const tabs = ['video', 'roadmap'] as const;

type Tab = (typeof tabs)[number];

export function AdminHeader() {
  const [selectedTab, setSelectedTab] = useState<Tab>('video');

  return (
    <header className="sticky left-0 top-0 z-10 w-full bg-white">
      <div className="layout flex h-[65px] items-center">
        {/* logo */}
        <div className="flex items-start">
          <Link href="/" target="_blank">
            <Logo />
          </Link>
          <span className="justify-self-start text-sm italic text-red-600">
            Admin
          </span>
        </div>

        {/* navigator */}
        <nav className="flex flex-1 gap-4 px-[32px] py-2">
          {tabs.map((tab) => (
            <Link
              key={tab}
              className={cn(
                'block rounded-lg px-3 py-2 capitalize hover:text-primary',
                selectedTab === tab && 'bg-primary/25 font-bold text-primary',
              )}
              href={`/admin/${tab}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
