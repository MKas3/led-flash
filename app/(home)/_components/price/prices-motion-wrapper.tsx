'use client';

import React, { createContext, useMemo, useRef } from 'react';

import { AppearingContainer } from '@/components/ui/appearing-container';
import { MotionValue, useScroll } from 'framer-motion';

import { cn } from '@/lib/utils';

type PricesContext = {
  scrollYProgress: MotionValue<number>;
};

export const pricesContext = createContext<PricesContext>({
  scrollYProgress: new MotionValue()
});

type PricesWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const PricesMotionWrapper = ({
  className,
  children,
  ...props
}: PricesWrapperProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end end'],
    target: targetRef
  });

  const contextValue = useMemo(() => ({ scrollYProgress }), [scrollYProgress]);

  return (
    <pricesContext.Provider value={contextValue}>
      <div
        ref={targetRef}
        className={cn('h-[400vh] pb-64 pt-16', className)}
        {...props}
      >
        <AppearingContainer
          className='sticky top-0 flex h-screen flex-col items-center bg-transparent'
          padding='none'
        >
          <div className='sticky top-[12.5vh] md:top-[22.5vh]'>
            {children}
          </div>
        </AppearingContainer>
      </div>
    </pricesContext.Provider>
  );
};
