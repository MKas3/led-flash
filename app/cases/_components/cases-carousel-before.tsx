'use client';

import React from 'react';

import { useDevice } from '@/hooks/use-device';
import { CarouselItem } from '@/components/ui/carousel';

export const CasesCarouselBefore = () => {
  const device = useDevice();

  return (
    <>
      {Array.from({ length: device === 'sm' || device === 'xs' ? 0 : 1 }).map(
        (_, index) => (
          <CarouselItem key={index} className='basis-1/3 lg:basis-1/4' />
        )
      )}
    </>
  );
};
