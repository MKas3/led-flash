import type { VariantProps } from 'class-variance-authority';

import React from 'react';

import Image from 'next/image';

import { CaseImageTrigger } from '@/app/cases/_components/case-image-trigger';
import { CarouselItem } from '@/components/ui/carousel';
import {
  Dialog,
  DialogClose,
  DialogInnerContent,
  DialogOverlay,
  DialogPortal
} from '@/components/ui/dialog';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const caseImageVariants = cva('', {
  variants: {
    variant: {
      lg: 'aspect-[9/7]',
      sm: 'aspect-[7/4]'
    }
  }
});

type CaseImageProps = React.ComponentPropsWithoutRef<typeof Image> & VariantProps<typeof caseImageVariants>;

export const CaseImage = ({ className, variant, ...props }: CaseImageProps) => {
  return (
    <Dialog>
      <CarouselItem className={cn('size-full pl-0 h-auto', className)}>
        <CaseImageTrigger>
          <Image className={cn(caseImageVariants({ variant }), 'size-full !relative object-cover')} {...props} />
        </CaseImageTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogInnerContent className='aspect-[3/4] size-fit h-[60vh] p-0'>
            <Image className='size-full rounded-sm object-cover' {...props} />
            <DialogClose className='md:inset-x-0 md:top-auto md:mx-auto' />
          </DialogInnerContent>
        </DialogPortal>
      </CarouselItem>
    </Dialog>
  );
};
