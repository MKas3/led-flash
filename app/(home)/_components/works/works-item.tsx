import React from 'react';

import { CarouselItem } from '@/components/ui/carousel';
import Link from '@/components/ui/link';

import { cn } from '@/lib/utils';

type WorksItemProps = React.ComponentPropsWithoutRef<typeof CarouselItem>;

export const WorksItem = ({ className, ...props }: WorksItemProps) => {
  return (
    <Link.Cases className='relative min-w-0 shrink-0 grow-0 basis-full pl-0'>
      <CarouselItem
        className={cn('pl-0 hover:brightness-125 transition-all', className)}
        {...props}
      />
    </Link.Cases>
  );
};
