import { ReactElement } from 'react';
import { LayoutWithHeader } from '@/components/shared/layout-with-header';
import { ExploreContainer } from '@/containers/pages/explore';

export default function ExplorePage() {
  return <ExploreContainer />;
}

ExplorePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutWithHeader title="영상 찾아보기 | Coply">{page}</LayoutWithHeader>
  );
};
