import { axiosInstance } from './axios';
import { SignInRequest, signInResponseSchema } from './models/auth';

export const signIn = async (request: SignInRequest) => {
  const { data } = await axiosInstance.post('/auth/login', request);
  const response = signInResponseSchema.parse(data);
  return response;
};
