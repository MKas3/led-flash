import React from 'react';

import { cn } from '@/lib/utils';

type CaseMainProps = React.HTMLAttributes<HTMLDivElement>;

export const CaseMain = ({ className, ...props }: CaseMainProps) => {
  return (
    <div
      className={cn(
        'absolute inset-1 z-10 flex h-full w-1/4 flex-col justify-between rounded-md p-9 text-foreground before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-r before:from-gradient-first before:to-gradient-second after:absolute after:inset-1 after:-z-10 after:rounded-[inherit] after:bg-popover',
        className
      )}
      {...props}
    />
  );
};
