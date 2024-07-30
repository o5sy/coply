import axios, { isAxiosError } from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// TODO 토스트바로 표시
axiosInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    if (isAxiosError(err)) {
      // if (err.response?.status === 400) {
      //   alert('잘못된 요청입니다.');
      // } else if (err.response?.status === 401) {
      //   alert('접근 권한이 없습니다.');
      //   window.location.href = '/signin';
      // }
    }
  },
);

// TODO 토스트바로 표시
axiosInstance.interceptors.request.use(
  (response) => response,
  (err) => {
    if (isAxiosError(err)) {
      if (err.code === 'ERR_NETWORK') {
        alert('예상치 못한 에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    }
  },
);
