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
        `grid group-hover:opacity-90 transition-opacity grid-flow-row grid-cols-1 content-start gap-y-2 rounded-sm bg-muted p-6 text-xs text-foreground lg:gap-y-4 lg:text-sm md:gap-y-3`,
        className
      )}
      {...props}
    />
  );
};
