import { ReactElement } from 'react';
import { LayoutWithAdminHeader, WithAdminAuth } from '@/components/admin';

export default function VideoPage() {
  return <WithAdminAuth>video</WithAdminAuth>;
}

VideoPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutWithAdminHeader title="영상 관리 | Coply">
      {page}
    </LayoutWithAdminHeader>
  );
};
