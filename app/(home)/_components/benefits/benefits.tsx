import React from 'react';

import { cn } from '@/lib/utils';

type BenefitsProps = React.HTMLAttributes<HTMLDivElement>;

export const Benefits = ({ className, ...props }: BenefitsProps) => {
  return (
    <div className={cn('grid grid-cols-4 gap-x-9', className)} {...props} />
  );
};
