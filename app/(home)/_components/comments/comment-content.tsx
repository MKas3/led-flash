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
        'grid grid-flow-row grid-cols-1 content-start gap-y-4 rounded-sm bg-muted p-6 text-sm text-foreground',
        className
      )}
      {...props}
    />
  );
};
