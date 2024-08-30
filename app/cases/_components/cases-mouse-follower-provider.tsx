'use client';

import type { CarouselApi } from '@/components/ui/carousel';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type State = 'idle' | 'left' | 'right';

type CasesMouseFollowerContext = {
  setActiveCase: (value?: CarouselApi) => void;
  activeCase?: CarouselApi;

  setState: (state: State) => void;
  state: State;

  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const casesMouseFollowerContext = createContext<CasesMouseFollowerContext>({} as CasesMouseFollowerContext);

export const useCasesMouseFollower = () => {
  return useContext(casesMouseFollowerContext);
};

export const CasesMouseFollowerProvider = ({ children }: { children?: React.ReactNode }) => {
  const [activeCase, setActiveCase] = useState<CarouselApi>();
  const [state, setState] = useState<State>('idle');

  const onMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const index = Math.round((x / width) * 2);

    if (index === 0) setState('left');
    else if (index === 2) setState('right');
    else setState('idle');
  }, []);

  const onClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (state === 'idle' || !activeCase) return;

    event.preventDefault();
    event.stopPropagation();

    const engine = activeCase.internalEngine();

    const scrollTo = (index: number, direction: number) => {
      engine.scrollBody
        .useFriction(0.5)
        .useDuration(engine.options.duration);

      engine.scrollTo.index(index, direction);
    };

    if (state === 'left') {
      const next = engine.index.add(-1).get();
      scrollTo(next, 1);
    } else {
      const next = engine.index.add(1).get();
      scrollTo(next, -1);
    }
  }, [activeCase, state]);

  const contextValue = useMemo(() => ({
    activeCase,
    setActiveCase,
    setState,
    state,
    onClick,
    onMouseMove
  }), [activeCase, onClick, onMouseMove, state]);

  return <casesMouseFollowerContext.Provider value={contextValue}>{children}</casesMouseFollowerContext.Provider>;
};
