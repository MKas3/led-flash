import React from 'react';

import { cn } from '@/lib/utils';
import { CarouselItem } from '@/components/ui/carousel';

type CommentProps = React.ComponentPropsWithoutRef<typeof CarouselItem>;

export const Comment = ({ className, ...props }: CommentProps) => {
  return (
    <CarouselItem
      className={cn('grid basis-1/3 grid-rows-[auto_1fr] gap-y-4', className)}
      {...props}
    />
  );
};
