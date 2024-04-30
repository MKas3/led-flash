import React from 'react';

import { cn } from '@/lib/utils';
import { CarouselItem } from '@/components/ui/carousel';
import { BenefitAppearingContainer } from '@/app/(home)/_components/benefits/benefit-appearing-container';

type BenefitProps = React.HTMLAttributes<HTMLSpanElement>;

export const Benefit = ({ className, children, ...props }: BenefitProps) => {
  return (
    <BenefitAppearingContainer
      className={cn(
        'group h-full shrink-0 grow-0 basis-1/4 bg-transparent pl-20 [&.is-snapped]:z-10',
        className
      )}
      padding='none'
    >
      <CarouselItem {...props}>
        <div className='relative flex aspect-[3/2] flex-col justify-between rounded-md border border-muted-foreground bg-popover p-9 transition-transform duration-1000 after:absolute after:inset-px after:-z-10 after:rounded-[inherit] after:bg-popover group-[.is-snapped]:scale-125'>
          {children}
          <div className='absolute inset-0 -z-10 rounded-[inherit] bg-gradient-to-r from-gradient-first to-gradient-second opacity-0 transition-opacity duration-1000 group-[.is-snapped]:opacity-100' />
          <div className='absolute inset-0 -z-10 rounded-[inherit] bg-gradient-to-r from-gradient-first to-gradient-second opacity-0 blur-[10px] transition-opacity duration-1000 group-[.is-snapped]:opacity-100' />
        </div>
      </CarouselItem>
    </BenefitAppearingContainer>
  );
};
