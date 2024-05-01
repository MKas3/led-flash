import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { CarouselItem } from '@/components/ui/carousel';

type CaseProps = React.ComponentPropsWithoutRef<typeof Image>;

export const Case = ({ className, ...props }: CaseProps) => {
  return (
    <CarouselItem className='basis-4/5 pl-4 md:basis-1/3 lg:basis-1/4'>
      <div
        className={cn(
          'overflow-hidden p-2 md:p-3 lg:p-5 xl:p-7 2xl:p-9',
          className
        )}
      >
        <Image className='rounded-sm object-cover' {...props} />
      </div>
    </CarouselItem>
  );
};
