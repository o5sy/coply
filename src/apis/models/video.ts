import { z } from 'zod';

const levels = ['BEGINNER', 'LOW', 'MIDDLE'] as const;
const categories = ['FE', 'BE', 'PREPARE', 'INTRODUCTION'] as const;

export const videoSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  thumbnailImageUrl: z.string(),
  uploadedAt: z.string(),
  videoChannel: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    thumbnailImageUrl: z.string(),
    subscriberCount: z.number(),
  }),
});

export const getVideosResponseSchema = z.object({
  items: z.array(videoSchema),
  total: z.number(),
});

export const getVideosRequestParamsSchema = z
  .object({
    take: z.number(),
    page: z.number(),
    keyword: z.string(),
    category: z.enum(categories),
    level: z.enum(levels),
  })
  .partial();

export type GetVideosResponse = z.infer<typeof getVideosResponseSchema>;
export type GetVideosRequestParams = z.infer<
  typeof getVideosRequestParamsSchema
>;

export type GetVideoResponse = z.infer<typeof videoSchema>;

export type LevelUnion = (typeof levels)[number];
export type CategoryUnion = (typeof categories)[number];
