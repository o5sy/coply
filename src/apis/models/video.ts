import { z } from 'zod';

export const videoSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  url: z.string(),
  uploadedAt: z.string(),
  videoChanenl: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    thumbnaiImageUrl: z.string(),
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
    category: z.enum(['FE', 'BE', 'PREPARE', 'INTRODUCTION']),
    level: z.enum(['BEGINNER', 'LOW', 'MIDDLE']),
  })
  .partial();

export type GetVideosResponse = z.infer<typeof getVideosResponseSchema>;
export type GetVideosParams = z.infer<typeof getVideosParamsSchema>;

export type GetVideoResponse = z.infer<typeof videoSchema>;
