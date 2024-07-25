import { z } from 'zod';

export const signInRequestSchema = z.object({
  token: z.string(),
});

export const signInResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type SignInRequest = z.infer<typeof signInRequestSchema>;
export type SignInResponse = z.infer<typeof signInResponseSchema>;
