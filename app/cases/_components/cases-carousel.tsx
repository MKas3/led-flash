import React from 'react';

import { screens } from '@/config/adaptive';
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
        breakpoints: { [`(min-width: ${screens.md}px)`]: { align: 'start' } },
      }}
      {...props}
    >
      <CarouselContent className='-ml-4 w-full'>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
