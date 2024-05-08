import React from 'react';

import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { WorksCarouselContent } from '@/app/(home)/_components/works/works-carousel-content';

type WorksCarouselProps = React.ComponentPropsWithoutRef<typeof Carousel>;

export const WorksCarousel = ({ children, ...props }: WorksCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: 'center',
        slidesToScroll: 1,
        containScroll: 'keepSnaps',
        skipSnaps: true,
        startIndex: 1,
      }}
      {...props}
    >
      <WorksCarouselContent wrapperClassName='mb-10'>
        {children}
      </WorksCarouselContent>
      <CarouselDots />
      <CarouselPrevious className='-left-full hidden lg:inline' />
      <CarouselNext className='-right-full hidden lg:inline' />
    </Carousel>
  );
};
