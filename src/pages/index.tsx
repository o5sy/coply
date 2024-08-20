import { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { LayoutWithHeader } from '@/components/shared/layout-with-header';
import { MainContainer } from '@/containers/pages/main';
import { getVideoById } from '@/apis/videos';
import { recommendedSections } from '@/containers/pages/main/models/main.model';

export default function MainPage() {
  return <MainContainer />;
}

MainPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithHeader title="Coply">{page}</LayoutWithHeader>;
};

export const getStaticProps = (async () => {
  const queryClient = new QueryClient();

  const videoIds = recommendedSections.flatMap((section) => section.videoIds);

  const requests = videoIds.map((videoId) => {
    return queryClient.prefetchQuery({
      queryKey: ['videos', { videoId }],
      queryFn: () => getVideoById(videoId),
    });
  });

  await Promise.allSettled(requests);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetStaticProps;
