'use client';

import React from 'react';

import { Carousel } from '@/components/ui/carousel';
import {
  benefitAnimationMobileSpeed,
  benefitAnimationSpeed
} from '@/config/home/benefits';
import AutoScroll from 'embla-carousel-auto-scroll';
import ClassNames from 'embla-carousel-class-names';

type BenefitsProps = React.ComponentPropsWithoutRef<typeof Carousel>;

export const Benefits = ({ className, ...props }: BenefitsProps) => {
  return (
    <Carousel
      className='relative z-10'
      opts={{
        breakpoints: {
          '(min-width: 768px)': {
            startIndex: 2
          }
        },
        loop: true,
        skipSnaps: true,
        startIndex: 1
      }}
      plugins={[
        AutoScroll({
          breakpoints: {
            '(min-width: 768px)': {
              speed: benefitAnimationSpeed
            }
          },
          playOnInit: true,
          speed: benefitAnimationMobileSpeed,
          stopOnInteraction: false
        }),
        ClassNames()
      ]}
      {...props}
    />
  );
};
