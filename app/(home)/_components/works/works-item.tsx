import React from 'react';

import { cn } from '@/lib/utils';
import { CarouselItem } from '@/components/ui/carousel';
import Link from '@/components/ui/link';

type WorksItemProps = React.ComponentPropsWithoutRef<typeof CarouselItem>;

export const WorksItem = ({ className, ...props }: WorksItemProps) => {
  return (
    <Link.Cases className='relative min-w-0 shrink-0 grow-0 basis-full pl-0'>
      <CarouselItem
        className={cn('pl-0 transition-opacity', className)}
        {...props}
      />
    </Link.Cases>
  );
};
