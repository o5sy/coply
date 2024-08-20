import { useEffect } from 'react';
import { useOpenState, useScreenSize } from '@/hooks';

export const useOpenFilterDrawer = () => {
  const { isOpen: isOpenFilterDrawer, handleState: handleFilterDrawer } =
    useOpenState();

  const { screenSize } = useScreenSize();

  useEffect(() => {
    // filter drawer 열린 상태에서 뷰포트 너비 커지면 닫힘
    if (screenSize === 'sm' || screenSize === 'md') {
      return;
    }
    if (isOpenFilterDrawer) {
      handleFilterDrawer.close();
    }
  }, [handleFilterDrawer, isOpenFilterDrawer, screenSize]);

  return { isOpenFilterDrawer, handleFilterDrawer };
};
