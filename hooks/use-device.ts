import { useMemo } from 'react';

import { screens } from '@/config/adaptive';
import { useMinWidth } from '@/hooks/use-min-width';

export const useDevice = () => {
  const isXs = useMinWidth('xs');
  const isSm = useMinWidth('sm');
  const isMd = useMinWidth('md');
  const isLg = useMinWidth('lg');
  const isXl = useMinWidth('xl');
  const is2Xl = useMinWidth('2xl');

  const screenMatches = useMemo(
    () => ({ xs: isXs, sm: isSm, md: isMd, lg: isLg, xl: isXl, '2xl': is2Xl }),
    [isXs, isSm, isMd, isLg, isXl, is2Xl]
  );
  const screen = useMemo(
    () =>
      Object.entries(screenMatches)
        .findLast((item) => item[1])
        ?.at(0) as keyof typeof screens | undefined,
    [screenMatches]
  );

  return screen;
};
