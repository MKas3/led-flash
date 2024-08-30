'use client';

import React from 'react';

import { CarouselDots } from '@/components/ui/carousel';

import { cn } from '@/lib/utils';

type CasesImagesDotsProps = React.ComponentPropsWithoutRef<'div'>;

export const CasesImagesDots = ({ className, ...props }: CasesImagesDotsProps) => {
  return (
    <CarouselDots className={cn('absolute bottom-2 inset-x-0', className)} {...props} />
  );
};
