import { ReactElement } from 'react';
import { LayoutWithAdminHeader, WithAdminAuth } from '@/components/admin';

export default function RoadmapPage() {
  return <WithAdminAuth>roadmap</WithAdminAuth>;
}

RoadmapPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutWithAdminHeader title="로드맵 관리 | Coply">
      {page}
    </LayoutWithAdminHeader>
  );
};
