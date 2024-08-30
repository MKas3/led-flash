import type { screens } from '@/config/adaptive';

import { useMemo } from 'react';

import { useMinWidth } from '@/hooks/use-min-width';

export const useDevice = () => {
  const isXs = useMinWidth('xs');
  const isSm = useMinWidth('sm');
  const isMd = useMinWidth('md');
  const isLg = useMinWidth('lg');
  const isXl = useMinWidth('xl');
  const is2Xl = useMinWidth('2xl');

  const screenMatches = useMemo(
    () => ({ '2xl': is2Xl, 'lg': isLg, 'md': isMd, 'sm': isSm, 'xl': isXl, 'xs': isXs }),
    [isXs, isSm, isMd, isLg, isXl, is2Xl]
  );
  return useMemo(
    () =>
      Object.entries(screenMatches)
        .findLast((item) => item[1])
        ?.at(0) as keyof typeof screens | undefined,
    [screenMatches]
  );
};
