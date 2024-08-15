import { z } from 'zod';
import { videoSchema } from './video';

export const getUserResponseSchema = z.object({
  id: z.number(),
  email: z.string(),
});

export const getViewingHistoryResponseSchema = z.union([
  z.object({
    watchTime: z.number(),
    video: videoSchema,
  }),
  z.string(),
]);

export const getViewingHistoriesResponseSchema = z.object({
  items: z.array(getViewingHistoryResponseSchema),
  nextCursor: z.string().nullable(),
  hasNextCursor: z.boolean(),
});

export const getViewingHistoriesRequestParamsSchema = z
  .object({
    cursor: z.string(),
    take: z.number(),
  })
  .partial();

export const upsertViewingHistoryRequestParamsSchema = z.object({
  watchTime: z.number(),
});

export type GetUserResponse = z.infer<typeof getUserResponseSchema>;

export type GetViewingHistoryResponse = z.infer<
  typeof getViewingHistoryResponseSchema
>;

export type GetViewingHistoriesResponse = z.infer<
  typeof getViewingHistoriesResponseSchema
>;

export type GetViewingHistoriesRequestParams = z.infer<
  typeof getViewingHistoriesRequestParamsSchema
>;

export type UpsertViewingHistoryRequestParams = z.infer<
  typeof upsertViewingHistoryRequestParamsSchema
>;
