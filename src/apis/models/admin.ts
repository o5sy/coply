import { z } from 'zod';
import { categories, levels } from './video';

const getVideosForAdminRequestParamsSchema = z
  .object({
    take: z.number(),
    page: z.number(),
  })
  .partial();

const updateVideoInfoByIdForAdminParamsSchema = z
  .object({
    category: z.enum(categories),
    level: z.enum(levels),
  })
  .partial();

export type GetVideosForAdminRequestParams = z.infer<
  typeof getVideosForAdminRequestParamsSchema
>;

export type UpdateVideoInfoByIdForAdminParams = z.infer<
  typeof updateVideoInfoByIdForAdminParamsSchema
>;
