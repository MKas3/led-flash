import React from 'react';

import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type CommentsCarouselProps = React.HTMLAttributes<HTMLDivElement>;

export const CommentsCarousel = ({
  className,
  children,
  ...props
}: CommentsCarouselProps) => {
  return (
    <Carousel className={cn('w-full overflow-hidden', className)} {...props}>
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
