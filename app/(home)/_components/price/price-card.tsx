'use client';

import type {
  HTMLMotionProps
} from 'framer-motion';

import React, { useContext } from 'react';

import { pricesContext } from '@/app/(home)/_components/price/prices-motion-wrapper';
import {
  motion,
  useSpring,
  useTransform
} from 'framer-motion';

import { cn } from '@/lib/utils';

type PricesProps = HTMLMotionProps<'div'> & {
  index: number;
  maxCount: number;
};

export const PriceCard = ({
  className,
  index,
  maxCount,
  ...props
}: PricesProps) => {
  const { scrollYProgress } = useContext(pricesContext);
  const springScrollYProgress = useSpring(scrollYProgress, {
    damping: 50,
    restDelta: 0.001,
    stiffness: 300
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
        `grid size-full auto-rows-auto grid-cols-2 h-full gap-y-9 rounded-sm bg-muted p-6 pb-9 text-foreground md:gap-y-12 md:pb-12`,
        index !== 0 && 'absolute inset-0',
        className
      )}
      style={{ rotateY, scale, x, zIndex: -index }}
      {...props}
    />
  );
};
