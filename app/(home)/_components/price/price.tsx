'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import { animate, HTMLMotionProps, motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { PricesContext } from '@/app/(home)/_components/price/prices-motion-wrapper';

type PriceProps = HTMLMotionProps<'span'> & {
  prices: number[];
  discountedPrices: number[];
};

export const Price = ({
  prices,
  discountedPrices,
  className,
  ...props
}: PriceProps) => {
  const priceRef = useRef<HTMLSpanElement>(null);
  const discountedPriceRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useContext(PricesContext);
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
      ...discountedPrices,
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
      onUpdate: (latest) => {
        if (!priceRef.current) return;

        priceRef.current.textContent = `${latest.toFixed(0)} руб`;
      },
      onComplete: () => {
        setCurrentPrice(finalPrice);
      },
      onStop: () => {
        setCurrentPrice(finalPrice);
      },
    });

    const discountedAnimation = animate(
      currentDiscountedPrice,
      finalDiscountedPrice,
      {
        duration: 0.5,
        ease: 'easeInOut',
        onUpdate: (latest) => {
          if (!discountedPriceRef.current) return;

          discountedPriceRef.current.textContent = `${latest.toFixed(0)} руб`;
        },
        onComplete: () => {
          setCurrentDiscountedPrice(finalDiscountedPrice);
        },
        onStop: () => {
          setCurrentDiscountedPrice(finalDiscountedPrice);
        },
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
    finalDiscountedPrice,
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
          'whitespace-nowrap text-[36px] font-bold md:text-[64px] xl:text-[80px] 2xl:text-[128px]',
          className
        )}
        {...props}
      />
    </div>
  );
};
