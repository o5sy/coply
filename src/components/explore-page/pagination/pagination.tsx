import { useMemo, useState } from 'react';
import { PageButton } from './page-button';

interface PaginationProps {
  initCurrentPage?: number;
  totalPage: number;
  size?: number;
}

export function Pagination({
  initCurrentPage = 1,
  totalPage,
  size = 10,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(
    Math.max(1, Math.min(initCurrentPage, totalPage)),
  );

  const pageNumbers = useMemo(() => {
    const pageGroupIndex = Math.floor((currentPage - 1) / size);

    const startIndex = pageGroupIndex * size + 1;
    const endIndex = Math.min(startIndex + size - 1, totalPage);

    const length = endIndex - startIndex + 1;

    return Array.from({ length }, (_, i) => startIndex + i);
  }, [currentPage, size, totalPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPage, prev + 1));
  };

  const handleMove = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="flex">
      {/* prev button */}
      <PageButton onClick={handlePrev}>&lt;</PageButton>

      {/* page buttons */}
      {pageNumbers.map((pageNum) => (
        <PageButton
          key={pageNum}
          isActive={pageNum === currentPage}
          onClick={() => handleMove(pageNum)}
        >
          {pageNum}
        </PageButton>
      ))}

      {/* next button */}
      <PageButton onClick={handleNext}>&gt;</PageButton>
    </div>
  );
}
