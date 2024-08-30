import React from 'react';

import { WorksCarouselContent } from '@/app/(home)/_components/works/works-carousel-content';
import {
  Carousel,
  CarouselDots,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

type WorksCarouselProps = React.ComponentPropsWithoutRef<typeof Carousel>;

export const WorksCarousel = ({ children, ...props }: WorksCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: 'center',
        containScroll: 'keepSnaps',
        skipSnaps: true,
        slidesToScroll: 1,
        startIndex: 1
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
