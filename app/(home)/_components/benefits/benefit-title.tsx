import React from 'react';

import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/heading';

type BenefitTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;

export const BenefitTitle = ({ className, ...props }: BenefitTitleProps) => {
  return (
    <Heading
      className={cn('text-xs font-normal md:text-sm lg:text-lg', className)}
      as='h3'
      {...props}
    />
  );
};
