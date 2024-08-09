import { z } from 'zod';
import { categories, levels } from './video';

const getVideosForAdminRequestParamsSchema = z
  .object({
    take: z.number(),
    page: z.number(),
  })
  .partial();

const updateVideoInfoByIdForAdminRequestParamsSchema = z
  .object({
    category: z.enum(categories),
    level: z.enum(levels),
  })
  .partial();

const addVideoForAdminRequestParamsSchema = z.object({
  videos: z
    .object({
      videoId: z.string(),
      category: z.enum(categories),
      level: z.enum(levels),
    })
    .array(),
});

export type GetVideosForAdminRequestParams = z.infer<
  typeof getVideosForAdminRequestParamsSchema
>;

export type UpdateVideoInfoByIdForAdminRequestParams = z.infer<
  typeof updateVideoInfoByIdForAdminRequestParamsSchema
>;

export type AddVideoForAdminRequestParams = z.infer<
  typeof addVideoForAdminRequestParamsSchema
>;
