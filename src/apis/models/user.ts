import { z } from 'zod';
import { videoSchema } from './video';

export const getUserResponseSchema = z.object({
  email: z.string(),
});

export const getViewingHistoryResponseSchema = z.object({
  duration: z.number(),
  video: videoSchema,
});

export const getViewingHistoriesResponseSchema = z.object({
  items: z.array(getViewingHistoryResponseSchema),
  nextCursor: z.string().nullable(),
});

export const getViewingHistoriesRequestParamsSchema = z
  .object({
    cursor: z.string(),
    take: z.number(),
  })
  .partial();

export const UpsertViewingHistoryRequestParamsSchema = z.object({
  duration: z.number(),
});

export type GetUserResponse = z.infer<typeof getUserResponseSchema>;

export type GetViewingHistoryResponse = z.infer<
  typeof getViewingHistoryResponseSchema
>;

export type GetViewingHistoriesResponse = z.infer<
  typeof getViewingHistoriesResponseSchema
>;

export type GetViewingHistoryRequestParams = z.infer<
  typeof getViewingHistoriesRequestParamsSchema
>;

export type UpsertViewingHistoryRequestParams = z.infer<
  typeof UpsertViewingHistoryRequestParamsSchema
>;
