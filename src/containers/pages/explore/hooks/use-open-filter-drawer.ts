import { useEffect, useMemo } from 'react';
import { ScreenSize, useOpenState, useScreenSize } from '@/hooks';

export const useOpenFilterDrawer = () => {
  const { isOpen: isOpenFilterDrawer, handleState: handleFilterDrawer } =
    useOpenState();

  const { screenSize } = useScreenSize();

  const isResponsiveSize = useMemo(() => {
    return screenSize <= ScreenSize.medium;
  }, [screenSize]);

  useEffect(() => {
    // filter drawer 열린 상태에서 뷰포트 너비 커지면 닫힘
    if (isResponsiveSize) {
      return;
    }
    if (isOpenFilterDrawer) {
      handleFilterDrawer.close();
    }
  }, [handleFilterDrawer, isOpenFilterDrawer, isResponsiveSize]);

  return {
    isOpenFilterDrawer,
    handleFilterDrawer,
    isResponsiveSize,
  };
};
