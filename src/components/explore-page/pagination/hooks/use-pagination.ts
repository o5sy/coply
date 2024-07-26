import { useState } from 'react';

export const usePagination = (initCurrentPage: number = 1) => {
  const [currentPage, setCurrentPage] = useState(initCurrentPage);

  const onPrev = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const onNext = (max: number) => {
    setCurrentPage((prev) => Math.min(max, prev + 1));
  };

  const onChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  return {
    currentPage,
    onPrev,
    onNext,
    onChange,
  };
};
