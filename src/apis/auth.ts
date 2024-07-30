import { axiosInstance } from './axios';
import {
  SignInRequest,
  SignInResponse,
  signInResponseSchema,
} from './models/auth';

export const signIn = async (
  request: SignInRequest,
): Promise<SignInResponse> => {
  const { data } = await axiosInstance.post('/auth/login', request);
  const response = signInResponseSchema.parse(data);
  return response;
};

export const signOut = () => {
  return axiosInstance.post('/auth/logout');
};
