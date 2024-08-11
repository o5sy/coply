import { ReactElement } from 'react';
import { LayoutWithAdminHeader, WithAdminAuth } from '@/components/admin';
import { RoadmapContainer } from '@/containers/pages/admin/roadmap';

export default function RoadmapPage() {
  return (
    <WithAdminAuth>
      <RoadmapContainer />
    </WithAdminAuth>
  );
}

RoadmapPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutWithAdminHeader title="로드맵 관리 | Coply">
      {page}
    </LayoutWithAdminHeader>
  );
};
