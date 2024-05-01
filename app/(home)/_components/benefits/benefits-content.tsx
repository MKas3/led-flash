'use client';

import React, { useEffect } from 'react';
import { AutoScrollType } from 'embla-carousel-auto-scroll';

import { benefitAnimationMobileSpeed } from '@/config/home/benefits';
import { useDevice } from '@/hooks/use-device';
import { CarouselContent, useCarousel } from '@/components/ui/carousel';

type BenefitsContentProps = React.HTMLAttributes<HTMLDivElement>;

export const BenefitsContent = ({
  className,
  ...props
}: BenefitsContentProps) => {
  const { api } = useCarousel();
  const device = useDevice();

  useEffect(() => {
    if (!api || (device !== 'xs' && device !== 'sm' && device !== 'md')) return;

    const autoScroll: AutoScrollType = Object.values(api.plugins()).find(
      (item) => item.name === 'autoScroll'
    );

    if (!autoScroll) return;

    autoScroll.options.speed = benefitAnimationMobileSpeed;
    api.reInit();
  }, [api, device]);

  return (
    <CarouselContent
      className='-ml-10 w-full'
      wrapperClassName='p-4 py-16'
      {...props}
    />
  );
};
