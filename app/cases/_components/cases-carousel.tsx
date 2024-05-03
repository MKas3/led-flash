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
      opts={{
        align: 'center',
        breakpoints: { '(min-width: 768px)': { align: 'start' } },
      }}
      {...props}
    >
      <CarouselContent className='-ml-4 w-full'>{children}</CarouselContent>
      <CarouselPrevious className='hidden md:block' />
      <CarouselNext className='hidden md:block' />
    </Carousel>
  );
};
