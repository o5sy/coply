import { useMemo } from 'react';
import { getScreenSize } from '@/utils/screen-size.util';
import { useMediaQuery } from './use-media-query';

export enum ScreenSize {
  small = 1,
  medium = 2,
  large = 3,
  extraLarge = 4,
  doubleExtraLarge = 5,
}

const { sm, md, lg, xl } = getScreenSize();

export const useScreenSize = () => {
  const is2ExtraLarge = useMediaQuery(`(width > ${xl})`);
  const isExtraLarge = useMediaQuery(`(${lg} < width <= ${xl})`);
  const isLarge = useMediaQuery(`(${md} < width <= ${lg})`);
  const isMedium = useMediaQuery(`(${sm} < width <= ${md})`);
  const isSmall = useMediaQuery(`(width <= ${sm})`);

  const screenSize = useMemo((): ScreenSize => {
    if (is2ExtraLarge) {
      return ScreenSize.doubleExtraLarge;
    }
    if (isExtraLarge) {
      return ScreenSize.extraLarge;
    }
    if (isLarge) {
      return ScreenSize.large;
    }
    if (isMedium) {
      return ScreenSize.medium;
    }
    if (isSmall) {
      return ScreenSize.small;
    }
    return ScreenSize.doubleExtraLarge;
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
