import { ReactElement } from 'react';
import { LayoutWithAdminHeader, WithAdminAuth } from '@/components/admin';
import { VideoContainer } from '@/containers/pages/admin/video';

export default function VideoPage() {
  return (
    <WithAdminAuth>
      <VideoContainer />
    </WithAdminAuth>
  );
}

VideoPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutWithAdminHeader title="영상 관리 | Coply">
      {page}
    </LayoutWithAdminHeader>
  );
};
