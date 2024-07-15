import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coply</title>
      </Head>
      {/* header */}
      <header className="flex h-[65px] w-full justify-center px-[200px]">
        <div className="flex h-full w-[1520px] items-center border-[1px]">
          {/* logo */}
          <div className="flex items-center pr-[32px]">
            <Image src="/flag.svg" alt="logo" width={28} height={28} />
            <span className="text-2xl text-primary">Coply</span>
          </div>

          {/* search input */}
          <label
            className="flex w-[300px] gap-[8px] rounded-lg bg-secondary px-[16px] py-[8px]"
            htmlFor="search-input"
          >
            <Image src="/search.svg" alt="search" width={18} height={18} />
            <input
              className="flex-1 text-primary"
              id="search-input"
              placeholder="search"
            />
          </label>

          {/* navigation */}
          <div className="flex flex-1 justify-end gap-[36px] px-[32px]">
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
          </div>

          {/* login button */}
          <button
            className="text-md h-[35px] rounded-lg bg-primary px-[30px] text-white"
            type="button"
          >
            로그인
          </button>
        </div>
      </header>
      <main />
    </>
  );
}
