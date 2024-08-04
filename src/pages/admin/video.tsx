import { ReactElement } from 'react';
import { LayoutWithAdminHeader } from '@/components/admin';

export default function VideoPage() {
  return <div>video</div>;
}

VideoPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutWithAdminHeader title="영상 관리 | Coply">
      {page}
    </LayoutWithAdminHeader>
  );
};
