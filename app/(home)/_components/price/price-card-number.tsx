import React from 'react';

import { cn } from '@/lib/utils';
import { GradientText } from '@/components/ui/gradient-text';

type PriceCardNumberProps = React.HTMLAttributes<HTMLDivElement>;

export const PriceCardNumber = ({
  className,
  ...props
}: PriceCardNumberProps) => {
  return (
    <GradientText className={cn('size-fit text-6xl', className)} {...props} />
  );
};
