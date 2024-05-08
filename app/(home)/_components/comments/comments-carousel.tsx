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
    <Carousel
      className={cn(
        '-mx-container-sm overflow-hidden md:-mx-container-md lg:-mx-container-lg xl:-mx-container',
        className
      )}
      opts={{ align: 'start' }}
      {...props}
    >
      <CarouselContent wrapperClassName='overflow-visible md:overflow-hidden mx-container-sm md:mx-container-md lg:mx-container-lg xl:mx-container'>
        {children}
      </CarouselContent>
      <CarouselPrevious className='left-[2.5vw] hidden md:inline lg:left-[5vw] xl:left-[10vw]' />
      <CarouselNext className='right-[2.5vw] hidden md:inline lg:right-[5vw] xl:right-[10vw]' />
    </Carousel>
  );
};
