import { useMemo } from 'react';
import { PageButton } from './page-button';

interface PaginationProps {
  page: number;
  totalPage: number;
  pageGroupSize?: number;
  onPrev: () => void;
  onNext: (max: number) => void;
  onChange: (pageNum: number) => void;
}

export function Pagination({
  page,
  totalPage,
  pageGroupSize = 10,
  onPrev,
  onNext,
  onChange,
}: PaginationProps) {
  const pageNumbers = useMemo(() => {
    const pageGroupIndex = Math.floor((page - 1) / pageGroupSize);

    const startIndex = pageGroupIndex * pageGroupSize + 1;
    const endIndex = Math.min(startIndex + pageGroupSize - 1, totalPage);

    const length = endIndex - startIndex + 1;

    return Array.from({ length }, (_, i) => startIndex + i);
  }, [page, pageGroupSize, totalPage]);

  const handleNext = () => {
    onNext(totalPage);
  };

  return (
    <div className="flex">
      {/* prev button */}
      <PageButton onClick={onPrev}>&lt;</PageButton>

      {/* page buttons */}
      {pageNumbers.map((pageNum) => (
        <PageButton
          key={pageNum}
          isActive={pageNum === page}
          onClick={() => onChange(pageNum)}
        >
          {pageNum}
        </PageButton>
      ))}

      {/* next button */}
      <PageButton onClick={handleNext}>&gt;</PageButton>
    </div>
  );
}
