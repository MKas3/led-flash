'use client';

import React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import ClassNames from 'embla-carousel-class-names';

import { Carousel } from '@/components/ui/carousel';

type BenefitsProps = React.ComponentPropsWithoutRef<typeof Carousel>;

export const Benefits = ({ className, ...props }: BenefitsProps) => {
  return (
    <Carousel
      className='pointer-events-none relative z-10'
      opts={{ dragFree: true, loop: true, startIndex: 2 }}
      plugins={[AutoScroll({ playOnInit: true, speed: 3 }), ClassNames()]}
      {...props}
    />
  );
};
