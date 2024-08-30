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
        `flex w-full shrink-0 flex-col items-center gap-y-4 text-sm lg:text-lg md:items-stretch md:text-base xl:text-xl`,
        className
      )}
      {...props}
    />
  );
};
