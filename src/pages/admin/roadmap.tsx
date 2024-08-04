import { ReactElement } from 'react';
import { LayoutWithAdminHeader } from '@/components/admin';

export default function RoadmapPage() {
  return <div>roadmap</div>;
}

RoadmapPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutWithAdminHeader title="로드맵 관리 | Coply">
      {page}
    </LayoutWithAdminHeader>
  );
};
