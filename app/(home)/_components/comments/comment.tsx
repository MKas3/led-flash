import React from 'react';

import { AppearingContainer } from '@/components/ui/appearing-container';
import { CarouselItem } from '@/components/ui/carousel';

import { cn } from '@/lib/utils';

type CommentProps = React.ComponentPropsWithoutRef<typeof CarouselItem>;

export const Comment = ({ className, ...props }: CommentProps) => {
  return (
    <AppearingContainer
      className='block shrink-0 grow-0 basis-full bg-transparent pl-4 md:basis-1/2 xl:basis-1/3'
      padding='none'
      transition={{ duration: 0.2 }}
      variant='child'
    >
      <CarouselItem
        className={cn(
          `grid h-full group grid-rows-[min-content_1fr] gap-y-2 pl-0 lg:gap-y-4 md:gap-y-3`,
          className
        )}
        {...props}
      />
    </AppearingContainer>
  );
};
