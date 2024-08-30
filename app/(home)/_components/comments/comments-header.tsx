import React from 'react';

import { cn } from '@/lib/utils';

type CommentsHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CommentsHeader = ({
  className,
  ...props
}: CommentsHeaderProps) => {
  return (
    <div
      className={cn(
        `grid w-full grid-rows-2 gap-y-3 rounded-sm bg-muted px-6 py-4 text-base font-bold text-foreground lg:text-2xl md:grid-cols-2 md:px-9 md:py-6 md:text-xl`,
        className
      )}
      {...props}
    />
  );
};
