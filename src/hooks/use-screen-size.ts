import { useMemo } from 'react';
import { getScreenSize } from '@/utils/screen-size.util';
import { useMediaQuery } from './use-media-query';

const { sm, md, lg, xl } = getScreenSize();

export const useScreenSize = () => {
  const is2ExtraLarge = useMediaQuery(`(width > ${xl})`);
  const isExtraLarge = useMediaQuery(`(${lg} < width <= ${xl})`);
  const isLarge = useMediaQuery(`(${md} < width <= ${lg})`);
  const isMedium = useMediaQuery(`(${sm} < width <= ${md})`);
  const isSmall = useMediaQuery(`(width <= ${sm})`);

  const screenSize = useMemo((): '2xl' | 'xl' | 'lg' | 'md' | 'sm' => {
    if (is2ExtraLarge) {
      return '2xl';
    }
    if (isExtraLarge) {
      return 'xl';
    }
    if (isLarge) {
      return 'lg';
    }
    if (isMedium) {
      return 'md';
    }
    if (isSmall) {
      return 'sm';
    }
    return '2xl';
  }, [is2ExtraLarge, isExtraLarge, isLarge, isMedium, isSmall]);

  return {
    is2ExtraLarge,
    isExtraLarge,
    isLarge,
    isMedium,
    isSmall,
    screenSize,
  };
};
