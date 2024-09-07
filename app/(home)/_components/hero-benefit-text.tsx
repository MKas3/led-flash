'use client';

import type { Timeout } from 'react-number-format/types/types';

import React, { useEffect, useState } from 'react';

import { TypewriterText } from '@/components/ui/typewriter-text';
import {
  heroBenefits,
  heroBenefitsDelay,
  heroBenefitsInterval
} from '@/config/home/benefits';

import { cn } from '@/lib/utils';

type HeroBenefitTextProps = React.ComponentPropsWithoutRef<
  typeof TypewriterText
>;

export const HeroBenefitText = ({
  className,
  ...props
}: HeroBenefitTextProps) => {
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState<
    number | undefined
  >();

  useEffect(() => {
    let timer: Timeout | undefined;

    const timeout = setTimeout(() => {
      setCurrentBenefitIndex(0);

      timer = setInterval(() => {
        setCurrentBenefitIndex(
          (prevState) => ((prevState ?? 0) + 1) % heroBenefits.length
        );
      }, heroBenefitsInterval);
    }, heroBenefitsDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, []);

  return (
    <TypewriterText
      className={cn(
        `z-10 my-auto h-[2.5em] !leading-[1.25em] whitespace-pre font-bold 2xl:text-3xl lg:text-xl`,
        className
      )}
      charCount={2}
      interval={35}
      reverseCharCount={1}
      reverseInterval={20}
      {...props}
    >
      {currentBenefitIndex !== undefined
        ? heroBenefits[currentBenefitIndex]
        : ''}
    </TypewriterText>
  );
};
