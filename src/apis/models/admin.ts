import { z } from 'zod';

const getVideosForAdminRequestParamsSchema = z
  .object({
    take: z.number(),
    page: z.number(),
  })
  .partial();

export type GetVideosForAdminRequestParams = z.infer<
  typeof getVideosForAdminRequestParamsSchema
>;
