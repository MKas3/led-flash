'use client';

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';

import {
  calculatorFormDefaults,
  CalculatorFormSchema,
} from '@/config/calculator/calculator';
import {
  neonTypePriceMultipliers,
  placesPriceMultipliers,
  priceMultipliers,
  substrateTypePrices,
} from '@/config/calculator/price';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CalculatorContext } from '@/app/calculator/_components/calculator-provider';

const calculatorVariants: Variants = {
  initial: {
    bottom: '-100%',
  },
  hasData: {
    bottom: '4%',
  },
};

type CalculatorPriceProps = HTMLMotionProps<'div'> & {
  formData: Partial<CalculatorFormSchema>;
};

export const CalculatorPrice = ({
  formData,
  className,
  ...props
}: CalculatorPriceProps) => {
  const { discount, fullPrice, setFullPrice } = useContext(CalculatorContext);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const hasFilledData = useMemo(
    () =>
      formData.width !== undefined ||
      formData.height !== undefined ||
      formData.length !== undefined ||
      formData.count !== undefined,
    [formData]
  );

  const intermediatePrice = useMemo(() => {
    const {
      substrateType = calculatorFormDefaults.substrateType,
      width = calculatorFormDefaults.width,
      height = calculatorFormDefaults.height,
      length = calculatorFormDefaults.length,
      count = calculatorFormDefaults.count,
    } = formData;

    return (
      substrateTypePrices[substrateType] +
      width * priceMultipliers.substrateWidth +
      height * priceMultipliers.substrateHeight +
      length * priceMultipliers.neonLength +
      count * priceMultipliers.neonCount
    );
  }, [formData]);

  useEffect(() => {
    setFullPrice(getFinalPrice(intermediatePrice));

    const discountedPrice = intermediatePrice - intermediatePrice * discount;

    setDiscountedPrice(getFinalPrice(discountedPrice));
  }, [formData, intermediatePrice, discount, setFullPrice]);

  const getFinalPrice = (price: number) => {
    const {
      neonType = calculatorFormDefaults.neonType,
      place = calculatorFormDefaults.place,
    } = formData;

    const neonTypeBasePrice = price * neonTypePriceMultipliers[neonType];

    return (
      neonTypeBasePrice + neonTypeBasePrice * placesPriceMultipliers[place]
    );
  };

  return (
    <motion.div
      className={cn(
        'sticky !grid grid-cols-2 grid-rows-1 items-center gap-y-4 rounded-md bg-muted p-5 font-unbounded md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)] md:p-2 lg:p-3 xl:p-4 2xl:p-5'
      )}
      variants={calculatorVariants}
      initial='initial'
      animate={hasFilledData && 'hasData'}
      {...props}
    >
      <span className='self-end text-lg font-bold md:self-center md:justify-self-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
        Итого:
      </span>
      <div className='flex flex-col items-end justify-start gap-y-1 text-lg font-bold md:items-start md:justify-center md:gap-y-2 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
        {fullPrice !== discountedPrice && (
          <span className='text-xs font-medium text-white/50 line-through md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
            {fullPrice.toFixed(0)} руб
          </span>
        )}
        {discountedPrice.toFixed(0)} руб
      </div>
      <Button
        className='col-span-2 md:col-span-1'
        variant='gradient'
        type='submit'
      >
        Продолжить
      </Button>
    </motion.div>
  );
};
