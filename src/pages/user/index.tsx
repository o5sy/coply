import { ReactElement } from 'react';
import Link from 'next/link';
import { Button } from '@/components/shared';
import { Guide } from '@/components/shared/guide';
import { LayoutWithHeader } from '@/components/shared/layout-with-header';
import { WithAuth } from '@/components/shared/with-auth';
import { UserContainer } from '@/containers/pages/user';

export default function UserPage() {
  return (
    <WithAuth
      fallback={
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
      }
    >
      <UserContainer />;
    </WithAuth>
  );
}

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithHeader title="내 정보 | Coply">{page}</LayoutWithHeader>;
};
