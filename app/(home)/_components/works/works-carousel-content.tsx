'use client';

import React, { useEffect } from 'react';

import { visibleSlidesCount } from '@/config/home/works';
import { cn } from '@/lib/utils';
import {
  CarouselApi,
  CarouselContent,
  useCarousel,
} from '@/components/ui/carousel';

type WorksCarouselContentProps = React.ComponentPropsWithoutRef<
  typeof CarouselContent
>;

export const WorksCarouselContent = ({
  wrapperClassName,
  ...props
}: WorksCarouselContentProps) => {
  const { api } = useCarousel();

  useEffect(() => {
    if (!api) return;

    const setCarouselItemStyle = (
      slideNode: HTMLElement,
      index: number,
      rotation: number,
      slidesCount: number
    ) => {
      const indexMax = rotation * (slidesCount + 1);
      const distance = index - indexMax;
      const scale = 3.5 / (Math.abs(distance) + 3.5);
      const translateX = distance * distance * (distance > 0 ? -25 : 25);
      slideNode.style.translate = `${translateX}%`;
      slideNode.style.scale = `${scale}`;
      slideNode.style.zIndex = `${Math.floor(scale * 100)}`;
      slideNode.style.opacity = `${Math.abs(distance) >= slidesCount / 2 ? 0 : 1}`;
      slideNode.style.filter = `brightness(${scale}) drop-shadow(0 0 60px #000000FF)`;
    };

    const onScroll = (api: NonNullable<CarouselApi>) => {
      const scrollProgress = api.scrollProgress();
      const slideNodes = api.slideNodes();
      slideNodes.forEach((item, index) => {
        setCarouselItemStyle(item, index, scrollProgress, visibleSlidesCount);
      });
    };

    api.on('scroll', onScroll);

    onScroll(api);

    return () => {
      api.off('scroll', onScroll);
    };
  }, [api]);

  return (
    <CarouselContent
      wrapperClassName={cn(
        'overflow-visible [perspective:1000px]',
        wrapperClassName
      )}
      className='ml-0'
      {...props}
    />
  );
};
