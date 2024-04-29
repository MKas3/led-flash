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
    <Carousel opts={{ slidesToScroll: 2 }} {...props}>
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
