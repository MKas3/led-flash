import React from 'react';

import { cn } from '@/lib/utils';
import { CarouselItem } from '@/components/ui/carousel';

type CommentProps = React.ComponentPropsWithoutRef<typeof CarouselItem>;

export const Comment = ({ className, ...props }: CommentProps) => {
  return (
    <CarouselItem
      className={cn(
        'grid grid-rows-[min-content_1fr] gap-y-2 md:basis-1/2 md:gap-y-3 lg:gap-y-4 xl:basis-1/3',
        className
      )}
      {...props}
    />
  );
};
