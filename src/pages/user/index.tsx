import { ReactElement } from 'react';
import { LayoutWithHeader } from '@/components/shared/layout-with-header';
import { WithAuth } from '@/components/shared/with-auth';
import { NoAuthGuide } from '@/components/user-page';
import { UserContainer } from '@/containers/pages/user';

export default function UserPage() {
  return (
    <WithAuth fallback={<NoAuthGuide />}>
      <UserContainer />;
    </WithAuth>
  );
}

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithHeader title="내 정보 | Coply">{page}</LayoutWithHeader>;
};
