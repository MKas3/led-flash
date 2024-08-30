import React from 'react';

import { GradientText } from '@/components/ui/gradient-text';

import { cn } from '@/lib/utils';

type PriceCardNumberProps = React.HTMLAttributes<HTMLDivElement>;

export const PriceCardNumber = ({
  className,
  ...props
}: PriceCardNumberProps) => {
  return (
    <GradientText className={cn('size-fit text-6xl', className)} {...props} />
  );
};
