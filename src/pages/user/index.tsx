import { ReactElement } from 'react';
import { LayoutWithHeader } from '@/components/shared/layout-with-header';
import { UserContainer } from '@/containers/pages/user';

export default function UserPage() {
  return <UserContainer />;
}

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithHeader title="내 정보 | Coply">{page}</LayoutWithHeader>;
};
