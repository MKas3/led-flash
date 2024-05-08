import React from 'react';

import { cn } from '@/lib/utils';

type CalculatorSectionProps = React.HTMLAttributes<HTMLDivElement>;

export const CalculatorSection = ({
  className,
  ...props
}: CalculatorSectionProps) => {
  return (
    <div
      className={cn(
        'flex w-full shrink-0 flex-col items-center gap-y-4 text-sm md:items-stretch md:text-base lg:text-lg xl:text-xl',
        className
      )}
      {...props}
    />
  );
};
