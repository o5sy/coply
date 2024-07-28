import { z } from 'zod';
import { videoSchema } from './video';

export const getViewingHistoryResponseSchema = z.object({
  duration: z.number(),
  video: videoSchema,
});

export type GetViewingHistoryResponse = z.infer<
  typeof getViewingHistoryResponseSchema
>;
