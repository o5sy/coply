import { z } from 'zod';
import { videoSchema } from './video';

export const getUserResponseSchema = z.object({
  email: z.string(),
});

export const getViewingHistoryResponseSchema = z.object({
  duration: z.number(),
  video: videoSchema,
});

export const UpsertViewingHistoryRequestParamsSchema = z.object({
  duration: z.number(),
});

export type GetUserResponse = z.infer<typeof getUserResponseSchema>;

export type GetViewingHistoryResponse = z.infer<
  typeof getViewingHistoryResponseSchema
>;

export type UpsertViewingHistoryRequestParams = z.infer<
  typeof UpsertViewingHistoryRequestParamsSchema
>;
