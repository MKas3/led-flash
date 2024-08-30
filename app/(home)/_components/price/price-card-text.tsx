import React from 'react';

import { cn } from '@/lib/utils';

type PriceCardTextProps = React.HTMLAttributes<HTMLDivElement>;

export const PriceCardText = ({ className, ...props }: PriceCardTextProps) => {
  return (
    <span
      className={cn(
        `col-span-2 text-xs lg:text-lg md:text-base sm:text-sm xl:text-xl`,
        className
      )}
      {...props}
    />
  );
};
