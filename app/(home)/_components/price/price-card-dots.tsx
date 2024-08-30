'use client';

import React, { useContext } from 'react';

import { pricesContext } from '@/app/(home)/_components/price/prices-motion-wrapper';
import { motion, useTransform } from 'framer-motion';

import { cn } from '@/lib/utils';

type PriceCardDotsProps = React.HTMLAttributes<HTMLDivElement> & {
  index: number;
  maxCount: number;
};

export const PriceCardDots = ({
  className,
  index,
  maxCount,
  ...props
}: PriceCardDotsProps) => {
  const { scrollYProgress } = useContext(pricesContext);
  const scale = useTransform(
    scrollYProgress,
    [(1 / maxCount) * index, (1 / maxCount) * (index + 1)],
    [0, 1]
  );

  return (
    <div
      className={cn(
        'grid size-fit grid-cols-4 gap-x-3.5 justify-self-end',
        className
      )}
      {...props}
    >
      {Array.from({ length: maxCount }).map((_, dotIndex) => (
        <span
          key={dotIndex}
          className='flex size-4 items-center justify-center rounded-full bg-muted-foreground'
        >
          {dotIndex <= index && (
            <motion.span
              className='size-4 rounded-full bg-gradient-second'
              style={{ scale: dotIndex === index ? scale : 1 }}
            />
          )}
        </span>
      ))}
    </div>
  );
};
