import React from 'react';

import { Heading } from '@/components/ui/heading';

import { cn } from '@/lib/utils';

type BenefitTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;

export const BenefitTitle = ({ className, ...props }: BenefitTitleProps) => {
  return (
    <Heading
      className={cn(`text-xs font-normal lg:text-lg md:text-sm`, className)}
      as='h3'
      {...props}
    />
  );
};
