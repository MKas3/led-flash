'use client';

import React, { useContext } from 'react';
import {
  HTMLMotionProps,
  motion,
  useSpring,
  useTransform,
} from 'framer-motion';

import { cn } from '@/lib/utils';
import { PricesContext } from '@/app/(home)/_components/price/prices-motion-wrapper';

type PricesProps = HTMLMotionProps<'div'> & {
  index: number;
  maxCount: number;
};

export const PriceCard = ({
  index,
  maxCount,
  className,
  ...props
}: PricesProps) => {
  const { scrollYProgress } = useContext(PricesContext);
  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
    restDelta: 0.001,
  });
  const scale = useTransform(
    springScrollYProgress,
    [(1 / maxCount) * index, (1 / maxCount) * (index + 1)],
    ['90%', '100%']
  );
  const x = useTransform(
    springScrollYProgress,
    [(1 / maxCount) * (index + 1), (1 / maxCount) * (index + 2)],
    ['0vw', '-100vw']
  );
  const rotateY = useTransform(
    springScrollYProgress,
    [(1 / maxCount) * (index + 1), (1 / maxCount) * (index + 2)],
    ['0deg', '-90deg']
  );

  return (
    <motion.div
      className={cn(
        'grid size-full auto-rows-auto grid-cols-2 gap-y-9 rounded-sm bg-muted p-6 pb-9 text-foreground md:gap-y-12 md:pb-12',
        index !== 0 && 'absolute inset-0',
        className
      )}
      style={{ zIndex: -index, x, scale, rotateY }}
      {...props}
    />
  );
};
