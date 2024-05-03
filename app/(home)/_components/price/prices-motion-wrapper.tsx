'use client';

import React, { createContext, useRef } from 'react';
import { MotionValue, useScroll, useSpring } from 'framer-motion';

import { cn } from '@/lib/utils';
import { AppearingContainer } from '@/components/ui/appearing-container';

type PricesContext = {
  scrollYProgress: MotionValue<number>;
};

export const PricesContext = createContext<PricesContext>({
  scrollYProgress: new MotionValue(),
});

type PricesWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const PricesMotionWrapper = ({
  className,
  children,
  ...props
}: PricesWrapperProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  return (
    <PricesContext.Provider value={{ scrollYProgress }}>
      <div ref={targetRef} className={cn('h-[400vh]', className)} {...props}>
        <AppearingContainer
          className='sticky top-0 flex h-screen flex-col items-center justify-center bg-transparent'
          padding='none'
        >
          {children}
        </AppearingContainer>
      </div>
    </PricesContext.Provider>
  );
};
