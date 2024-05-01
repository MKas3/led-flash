import React from 'react';

import { cn } from '@/lib/utils';

type CommentContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CommentContent = ({
  className,
  ...props
}: CommentContentProps) => {
  return (
    <div
      className={cn(
        'grid grid-flow-row grid-cols-1 content-start gap-y-2 rounded-sm bg-muted p-6 text-xs text-foreground md:gap-y-3 lg:gap-y-4 lg:text-sm',
        className
      )}
      {...props}
    />
  );
};
