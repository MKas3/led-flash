import React from 'react';

import Image from 'next/image';

import { CaseImageTrigger } from '@/app/cases/_components/case-image-trigger';
import { CarouselItem } from '@/components/ui/carousel';
import { Dialog, DialogClose, DialogInnerContent, DialogOverlay, DialogPortal } from '@/components/ui/dialog';

import { cn } from '@/lib/utils';

type CommentImageProps = React.ComponentPropsWithoutRef<typeof Image>;

export const CommentImage = ({ className, sizes, ...props }: CommentImageProps) => {
  return (
    <Dialog>
      <CarouselItem className={cn('size-full pl-0 h-auto', className)}>
        <CaseImageTrigger>
          <Image className={cn('rounded-lg', className)} sizes={sizes} {...props} />
        </CaseImageTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogInnerContent className='size-fit p-0 max-md:w-full md:h-[60vh]'>
            <Image className='size-full rounded-sm object-cover' sizes='80vw' {...props} />
            <DialogClose className='md:inset-x-0 md:top-auto md:mx-auto' />
          </DialogInnerContent>
        </DialogPortal>
      </CarouselItem>
    </Dialog>
  );
};
