import { z } from 'zod';

const levels = ['BEGINNER', 'LOW', 'MIDDLE'] as const;
const categories = ['FE', 'BE', 'PREPARE', 'INTRODUCTION'] as const;

export const videoSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  url: z.string(),
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

export const getVideosParamsSchema = z
  .object({
    take: z.string(),
    page: z.number(),
    keyword: z.string(),
    category: z.enum(levels),
    level: z.enum(categories),
  })
  .partial();

export type GetVideosResponse = z.infer<typeof getVideosResponseSchema>;
export type GetVideosParams = z.infer<typeof getVideosParamsSchema>;

export type GetVideoResponse = z.infer<typeof videoSchema>;

export type LevelUnion = (typeof levels)[number];
export type CategoryUnion = (typeof categories)[number];
