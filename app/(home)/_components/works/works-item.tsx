import React from 'react';

import { cn } from '@/lib/utils';
import { CarouselItem } from '@/components/ui/carousel';

type WorksItemProps = React.ComponentPropsWithoutRef<typeof CarouselItem>;

export const WorksItem = ({ className, ...props }: WorksItemProps) => {
  return (
    <CarouselItem
      className={cn('relative pl-0 transition-opacity', className)}
      {...props}
    />
  );
};
