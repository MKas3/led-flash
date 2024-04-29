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
        'grid grid-cols-2 grid-rows-2 gap-y-3 rounded-sm bg-muted px-9 py-6 text-2xl font-bold text-foreground',
        className
      )}
      {...props}
    />
  );
};
