import React from 'react';

import { CaseMouseFollowerHandler } from '@/app/cases/_components/case-mouse-follower-handler';
import { CasesImagesDots } from '@/app/cases/_components/cases-images-dots';
import { Carousel, CarouselContent } from '@/components/ui/carousel';

import { cn } from '@/lib/utils';

type CaseImagesProps = React.ComponentPropsWithoutRef<typeof Carousel>;

export const CaseImages = ({ className, children, ...props }: CaseImagesProps) => {
  return (
    <Carousel className={cn('pointer-events-none relative shrink-0 grow-0 w-full', className)} opts={{ active: false, duration: 10 }} {...props}>
      <CaseMouseFollowerHandler>
        <CarouselContent className='ml-0 h-fit' wrapperClassName='rounded-md'>{children}</CarouselContent>
      </CaseMouseFollowerHandler>
      <CasesImagesDots />
    </Carousel>
  );
};
