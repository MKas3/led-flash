import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { CarouselItem } from '@/components/ui/carousel';

type CaseProps = React.ComponentPropsWithoutRef<typeof Image>;

export const Case = ({ className, ...props }: CaseProps) => {
  return (
    <CarouselItem className='basis-1/4'>
      <div className={cn('overflow-hidden p-9', className)}>
        <Image className='rounded-sm object-cover' {...props} />
      </div>
    </CarouselItem>
  );
};
