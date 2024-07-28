import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getVideoById } from '@/apis/videos';
import { getFirstSegment } from '@/utils/server-side.util';

export const useGetVideoByIdQuery = () => {
  const router = useRouter();
  const id = getFirstSegment(router.query.id);

  return useQuery({
    queryKey: ['video', id],
    queryFn: () => getVideoById(id as string),
    enabled: !!id,
  });
};
