'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import { animate, HTMLMotionProps, motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { MorphText } from '@/components/ui/morph-text';
import { PricesContext } from '@/app/(home)/_components/price/prices-motion-wrapper';

type PriceProps = HTMLMotionProps<'span'> & {
  prices: number[];
};

export const Price = ({ prices, className, ...props }: PriceProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useContext(PricesContext);
  const [currentPrice, setCurrentPrice] = useState(prices[0]);
  const [price, setPrice] = useState(prices[0]);

  useEffect(() => {
    const processedPrices = [prices[0], ...prices];
    const step = prices.length;

    return scrollYProgress.on('change', (latestValue) => {
      setPrice(processedPrices[Math.round(step * latestValue)]);
    });
  }, [prices, scrollYProgress]);

  useEffect(() => {
    const animation = animate(currentPrice, price, {
      duration: 0.5,
      ease: 'easeInOut',
      onUpdate: (latest) => {
        if (!ref.current) return;

        ref.current.textContent = `${latest.toFixed(0)} руб.`;
      },
      onComplete: () => {
        setCurrentPrice(price);
      },
      onStop: () => {
        setCurrentPrice(price);
      },
    });

    return () => {
      animation.stop();
    };
  }, [ref, price, currentPrice]);

  return (
    <motion.span
      ref={ref}
      className={cn('whitespace-nowrap text-[128px] font-bold', className)}
      {...props}
    />
  );
};
