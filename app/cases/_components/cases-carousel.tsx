import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type CasesCarouselProps = React.ComponentPropsWithoutRef<typeof Carousel>;

export const CasesCarousel = ({ children, ...props }: CasesCarouselProps) => {
  return (
    <Carousel
      className='-mx-container-sm overflow-hidden md:-mx-container-md lg:-mx-container-lg xl:-mx-container'
      opts={{
        align: 'center',
        breakpoints: { '(min-width: 768px)': { align: 'start' } },
      }}
      {...props}
    >
      <CarouselContent
        wrapperClassName='overflow-visible md:overflow-hidden mx-container-sm md:mx-container-md lg:mx-container-lg xl:mx-container'
        className='-ml-4 w-full'
      >
        {children}
      </CarouselContent>
      <CarouselPrevious className='hidden md:block' />
      <CarouselNext className='hidden md:block' />
    </Carousel>
  );
};
