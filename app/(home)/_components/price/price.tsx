'use client';

import type { HTMLMotionProps } from 'framer-motion';

import React, { useContext, useEffect, useRef, useState } from 'react';

import { pricesContext } from '@/app/(home)/_components/price/prices-motion-wrapper';
import { animate, motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type PriceProps = HTMLMotionProps<'span'> & {
  discountedPrices: number[];
  prices: number[];
};

export const Price = ({
  className,
  discountedPrices,
  prices,
  ...props
}: PriceProps) => {
  const priceRef = useRef<HTMLSpanElement>(null);
  const discountedPriceRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useContext(pricesContext);
  const [currentPrice, setCurrentPrice] = useState(prices[0]);
  const [currentDiscountedPrice, setCurrentDiscountedPrice] = useState(
    discountedPrices[0]
  );
  const [finalPrice, setFinalPrice] = useState(prices[0]);
  const [finalDiscountedPrice, setFinalDiscountedPrice] = useState(
    discountedPrices[0]
  );

  useEffect(() => {
    const processedPrices = [prices[0], ...prices];
    const processedDiscountedPrices = [
      discountedPrices[0],
      ...discountedPrices
    ];
    const step = prices.length;

    return scrollYProgress.on('change', (latestValue) => {
      setFinalPrice(processedPrices[Math.round(step * latestValue)]);
      setFinalDiscountedPrice(
        processedDiscountedPrices[Math.round(step * latestValue)]
      );
    });
  }, [prices, discountedPrices, scrollYProgress]);

  useEffect(() => {
    const animation = animate(currentPrice, finalPrice, {
      duration: 0.5,
      ease: 'easeInOut',
      onComplete: () => {
        setCurrentPrice(finalPrice);
      },
      onStop: () => {
        setCurrentPrice(finalPrice);
      },
      onUpdate: (latest) => {
        if (!priceRef.current) return;

        priceRef.current.textContent = `${latest.toFixed(0)} руб`;
      }
    });

    const discountedAnimation = animate(
      currentDiscountedPrice,
      finalDiscountedPrice,
      {
        duration: 0.5,
        ease: 'easeInOut',
        onComplete: () => {
          setCurrentDiscountedPrice(finalDiscountedPrice);
        },
        onStop: () => {
          setCurrentDiscountedPrice(finalDiscountedPrice);
        },
        onUpdate: (latest) => {
          if (!discountedPriceRef.current) return;

          discountedPriceRef.current.textContent = `${latest.toFixed(0)} руб`;
        }
      }
    );

    return () => {
      animation.stop();
      discountedAnimation.stop();
    };
  }, [
    priceRef,
    currentPrice,
    currentDiscountedPrice,
    finalPrice,
    finalDiscountedPrice
  ]);

  return (
    <div className='flex flex-col justify-center leading-tight md:items-center lg:items-end'>
      <motion.span
        ref={priceRef}
        className='whitespace-nowrap text-base line-through sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl'
      />
      <motion.span
        ref={discountedPriceRef}
        className={cn(
          `whitespace-nowrap text-[36px] font-bold 2xl:text-[128px] md:text-[64px] xl:text-[80px]`,
          className
        )}
        {...props}
      />
    </div>
  );
};
