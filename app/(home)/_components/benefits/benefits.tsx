'use client';

import React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import ClassNames from 'embla-carousel-class-names';

import {
  benefitAnimationMobileSpeed,
  benefitAnimationSpeed,
} from '@/config/home/benefits';
import { Carousel } from '@/components/ui/carousel';

type BenefitsProps = React.ComponentPropsWithoutRef<typeof Carousel>;

export const Benefits = ({ className, ...props }: BenefitsProps) => {
  return (
    <Carousel
      className='relative z-10'
      opts={{
        loop: true,
        startIndex: 1,
        breakpoints: {
          '(min-width: 768px)': {
            startIndex: 2,
          },
        },
      }}
      plugins={[
        AutoScroll({
          playOnInit: true,
          stopOnInteraction: false,
          speed: benefitAnimationMobileSpeed,
          breakpoints: {
            '(min-width: 768px)': {
              speed: benefitAnimationSpeed,
            },
          },
        }),
        ClassNames(),
      ]}
      {...props}
    />
  );
};
