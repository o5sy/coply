import { z } from 'zod';

export const levels = ['BEGINNER', 'LOW', 'MIDDLE'] as const;
export const categories = ['FE', 'BE', 'AI', 'DESIGN', 'ETC'] as const;

export const videoSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  thumbnailImageUrl: z.string(),
  duration: z.number(),
  level: z.enum(levels),
  categories: z.array(z.enum(categories)),
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
    // 실제 요청 형태: ?categories[]=FE&categories[]=BE
    categories: z.array(z.enum(categories)),
    level: z.enum(levels),
  })
  .partial();

export type GetVideosResponse = z.infer<typeof getVideosResponseSchema>;
export type GetVideosRequestParams = z.infer<
  typeof getVideosRequestParamsSchema
>;

export type GetVideoResponse = z.infer<typeof videoSchema>;

export type Level = (typeof levels)[number];
export type Category = (typeof categories)[number];
