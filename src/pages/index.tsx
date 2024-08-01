import { ReactElement } from 'react';
import { LayoutWithHeader } from '@/components/shared/layout-with-header';
import { MainContainer } from '@/containers/pages/main';

export default function MainPage() {
  return <MainContainer />;
}

MainPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithHeader title="Coply">{page}</LayoutWithHeader>;
};
