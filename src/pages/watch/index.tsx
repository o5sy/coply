import Head from 'next/head';
import Link from 'next/link';
import MenuIcon from 'public/menu-icon.svg';
import YouTube from 'react-youtube';

export default function WatchPage() {
  const title = '영상 제목';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex h-[100vh] w-[100vw] flex-col">
        <header className="flex h-[65px] items-center bg-gray-800">
          <button
            type="button"
            className="flex-center h-full w-[65px] hover:bg-gray-500"
          >
            <MenuIcon color="white" alt="영상 정보" />
          </button>
          <h1 className="pl-[8px] text-lg font-semibold text-white">{title}</h1>
        </header>

        <main className="flex-center flex-1 bg-gray-700">
          <YouTube
            videoId="M7lc1UVf-VE"
            opt={{
              height: '360',
              width: '640',
            }}
            className="h-full w-full"
            iframeClassName="h-[inherit] w-[inherit]"
          />
        </main>

        <div className="flex h-[60px] items-center bg-gray-600 px-[24px]">
          <Link href="/" className="px-[4px] py-[8px] text-sm text-gray-300">
            &lt; 홈으로 이동
          </Link>
        </div>
      </div>
    </>
  );
}
