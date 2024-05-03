import React from 'react';

import { cn } from '@/lib/utils';

type CaseMainProps = React.HTMLAttributes<HTMLDivElement>;

export const CaseMain = ({ className, ...props }: CaseMainProps) => {
  return (
    <div
      className={cn(
        'relative z-10 mb-4 flex h-full flex-col justify-between gap-y-12 rounded-md p-7 text-foreground before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-r before:from-gradient-first before:to-gradient-second after:absolute after:inset-0.5 after:-z-10 after:rounded-[inherit] after:bg-popover md:absolute md:inset-1 md:mb-0 md:w-1/3 md:gap-y-0 md:p-9 md:after:inset-1 lg:w-1/4',
        className
      )}
      {...props}
    />
  );
};
