import React from 'react';

import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/heading';

type BenefitTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;

export const BenefitTitle = ({ className, ...props }: BenefitTitleProps) => {
  return (
    <Heading
      className={cn('!text-base font-normal', className)}
      as='h3'
      {...props}
    />
  );
};
