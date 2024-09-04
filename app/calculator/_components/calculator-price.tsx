'use client';

import type {
  CalculatorFormSchema
} from '@/config/calculator/calculator';
import type { HTMLMotionProps, Variants } from 'framer-motion';

import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { calculatorContext } from '@/app/calculator/_components/calculator-provider';
import { Button } from '@/components/ui/button';
import {
  calculatorFormDefaults
} from '@/config/calculator/calculator';
import {
  neonTypePriceMultipliers,
  placesPriceMultipliers,
  priceMultipliers,
  substrateTypePrices
} from '@/config/calculator/price';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

const calculatorVariants: Variants = {
  hasData: {
    bottom: '4%'
  },
  initial: {
    bottom: '-100%'
  }
};

type CalculatorPriceProps = HTMLMotionProps<'div'> & {
  formData: Partial<CalculatorFormSchema>;
};

export const CalculatorPrice = ({
  className,
  formData,
  ...props
}: CalculatorPriceProps) => {
  const { discount, fullPrice, setFullPrice } = useContext(calculatorContext);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const hasFilledData = useMemo(
    () =>
      formData.width !== undefined
      || formData.height !== undefined
      || formData.length !== undefined
      || formData.count !== undefined,
    [formData]
  );

  const intermediatePrice = useMemo(() => {
    const {
      count = calculatorFormDefaults.count,
      height = calculatorFormDefaults.height,
      length = calculatorFormDefaults.length,
      substrateType = calculatorFormDefaults.substrateType,
      width = calculatorFormDefaults.width
    } = formData;

    return (
      substrateTypePrices[substrateType]
      + width * priceMultipliers.substrateWidth
      + height * priceMultipliers.substrateHeight
      + length * priceMultipliers.neonLength
      + count * priceMultipliers.neonCount
    );
  }, [formData]);

  const getFinalPrice = useCallback((price: number) => {
    const {
      neonType = calculatorFormDefaults.neonType,
      place = calculatorFormDefaults.place
    } = formData;

    const neonTypeBasePrice = price * neonTypePriceMultipliers[neonType];

    return (
      neonTypeBasePrice + neonTypeBasePrice * placesPriceMultipliers[place]
    );
  }, [formData]);

  useEffect(() => {
    setFullPrice(getFinalPrice(intermediatePrice));

    const discountedPrice = intermediatePrice - intermediatePrice * discount;

    setDiscountedPrice(getFinalPrice(discountedPrice));
  }, [formData, intermediatePrice, discount, setFullPrice, getFinalPrice]);

  return (
    <motion.div
      className={cn(
        `sticky !grid grid-cols-2 grid-rows-1 items-center gap-y-4 rounded-md bg-muted p-5 font-unbounded 2xl:p-4 lg:p-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)] md:p-2 xl:p-4`
      )}
      animate={hasFilledData && 'hasData'}
      initial='initial'
      variants={calculatorVariants}
      {...props}
    >
      <span className='self-end text-lg font-bold md:self-center md:justify-self-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
        Итого:
      </span>
      <div className='flex flex-col items-end justify-start gap-y-1 text-lg font-bold md:items-start md:justify-center md:gap-y-2 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
        {fullPrice !== discountedPrice && (
          <span className='text-xs font-medium text-white/50 line-through md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
            {fullPrice.toFixed(0)}
            {' '}
            руб
          </span>
        )}
        {discountedPrice.toFixed(0)}
        {' '}
        руб
      </div>
      <Button
        className='col-span-2 md:col-span-1'
        size='medium'
        type='submit'
        variant='gradient'
      >
        Продолжить
      </Button>
    </motion.div>
  );
};
