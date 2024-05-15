'use client';

import React, { useEffect, useState } from 'react';
import { Timeout } from 'react-number-format/types/types';

import {
  heroBenefits,
  heroBenefitsDelay,
  heroBenefitsInterval,
} from '@/config/home/benefits';
import { cn } from '@/lib/utils';
import { TypewriterText } from '@/components/ui/typewriter-text';

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
    let timer: Timeout | undefined = undefined;

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
        'z-10 my-auto h-[3.25em] whitespace-pre-line font-bold lg:text-xl 2xl:text-3xl',
        className
      )}
      charCount={1}
      interval={30}
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
