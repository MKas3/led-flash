'use client';

import React, { useContext, useEffect, useMemo } from 'react';

import { calculatorContext } from '@/app/calculator/_components/calculator-provider';
import { Progress } from '@/components/ui/progress';
import { discounts, discountsFromPrice } from '@/config/calculator/price';

import { cn } from '@/lib/utils';

type CalculatorDiscountProps = React.HTMLAttributes<HTMLDivElement>;

export const CalculatorDiscount = ({
  className,
  ...props
}: CalculatorDiscountProps) => {
  const { discount, fullPrice, initialized, setDiscount }
    = useContext(calculatorContext);
  const nextDiscountIndex = useMemo(
    () => discounts.findIndex((item) => item === discount) + 1,
    [discount]
  );
  const isMax = useMemo(
    () => nextDiscountIndex >= discounts.length,
    [nextDiscountIndex]
  );
  const nextDiscount = useMemo(
    () => (discounts.at(nextDiscountIndex) ?? 0) * 100,
    [nextDiscountIndex]
  );
  const leftToNextDiscount = useMemo(
    () =>
      isMax ? 0 : (discountsFromPrice.at(nextDiscountIndex) ?? 0) - fullPrice,
    [nextDiscountIndex, fullPrice, isMax]
  );

  useEffect(() => {
    const fromPriceIndex = discountsFromPrice.findLastIndex(
      (item) => item <= fullPrice
    );
    const newDiscount = fromPriceIndex !== -1 ? discounts[fromPriceIndex] : 0;

    setDiscount(newDiscount);
  }, [fullPrice, setDiscount]);

  return (
    <div
      className={cn(
        `!grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-4 font-poppins text-base lg:text-xl md:text-lg xl:text-2xl`,
        className
      )}
      {...props}
    >
      <div className='relative col-span-2'>
        <Progress
          aria-labelledby='discount-progressbar'
          value={
            initialized
              ? (fullPrice / (fullPrice + leftToNextDiscount)) * 100
              : 50
          }
        />
        <span
          className='absolute inset-2 flex items-center justify-center transition-all'
          style={{
            transform: `translateX(-${initialized ? 50 - (fullPrice / (fullPrice + leftToNextDiscount)) * 50 : 25}%)`
          }}
        >
          {(discount * 100).toFixed(0)}
          %
        </span>
      </div>
      <div className='relative'>
        <Progress aria-labelledby='discount-progressbar' value={-10} />
        <span className='absolute inset-0 flex items-center justify-center'>
          {isMax ? 'MAX' : `${nextDiscount.toFixed(0)}%`}
        </span>
      </div>
      <span className='col-span-3 text-center text-[inherit]'>
        {!isMax
          ? `Еще ${leftToNextDiscount.toFixed(0)} руб до скидки в ${nextDiscount.toFixed(0)}%`
          : 'Достигнута максимальная скидка'}
      </span>
    </div>
  );
};
