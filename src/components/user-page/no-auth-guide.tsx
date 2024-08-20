import Link from 'next/link';
import { Button, Guide } from '../shared';

export function NoAuthGuide() {
  return (
    <main className="layout w-full p-[16px] pt-[140px]">
      <Guide
        text="시청한 영상을 확인하세요"
        subText="로그인을 통해 시청 중인 이력을 관리할 수 있습니다."
        bottomContents={
          <Link href="/signin">
            <Button>로그인</Button>
          </Link>
        }
      />
    </main>
  );
}
