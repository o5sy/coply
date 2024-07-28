import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getVideoById, getVideos } from '@/apis/videos';
import { WatchContainer } from '@/containers/pages/watch';
import { useGetVideoByIdQuery } from '@/containers/pages/watch/hooks';
import { getFirstSegment } from '@/utils/server-side.util';

export default function WatchPage() {
  const { data } = useGetVideoByIdQuery();

  return (
    <>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <WatchContainer />
    </>
  );
}

export const getStaticPaths = (async () => {
  const videos = await getVideos();

  const ids =
    videos?.items.map((video) => {
      return { params: { id: video.id } };
    }) || [];

  return {
    paths: ids,
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const queryClient = new QueryClient();

  const id = getFirstSegment(params?.id);

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    await queryClient.fetchQuery({
      queryKey: ['video', id],
      queryFn: () => getVideoById(id),
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps;
