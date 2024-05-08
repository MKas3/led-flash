'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ReactDOM from 'react-dom';

import { cn } from '@/lib/utils';
import { CarouselItem } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

type CaseProps = React.ComponentPropsWithoutRef<typeof Image>;

export const Case = ({ className, ...props }: CaseProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Dialog>
      <CarouselItem className='basis-4/5 pl-4 md:basis-1/3 lg:basis-1/4'>
        <div
          className={cn(
            'overflow-hidden p-2 md:p-3 lg:p-5 xl:p-7 2xl:p-9',
            className
          )}
        >
          <DialogTrigger>
            <Image className='rounded-sm object-cover' {...props} />
          </DialogTrigger>
        </div>
        <DialogContent className='aspect-[3/4] size-fit h-[60vh] p-0'>
          <Image className='size-full rounded-sm object-cover ' {...props} />
        </DialogContent>
      </CarouselItem>
    </Dialog>
  );
};
