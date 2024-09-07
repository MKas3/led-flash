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
    () => ([
      { xs: isXs },
      { sm: isSm },
      { md: isMd },
      { lg: isLg },
      { xl: isXl },
      { '2xl': is2Xl }
    ]),
    [isXs, isSm, isMd, isLg, isXl, is2Xl]
  );

  return useMemo(
    () =>
      Object.keys(screenMatches
        .findLast((item) => Object.values(item).some((value) => value)) ?? {})
        .at(0) as keyof typeof screens | undefined,
    [screenMatches]
  );
};
