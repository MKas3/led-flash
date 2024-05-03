import React from 'react';

import { CarouselContent } from '@/components/ui/carousel';

type BenefitsContentProps = React.HTMLAttributes<HTMLDivElement>;

export const BenefitsContent = ({
  className,
  ...props
}: BenefitsContentProps) => {
  return (
    <CarouselContent
      className='-ml-10 w-full'
      wrapperClassName='p-4 py-16'
      {...props}
    />
  );
};
