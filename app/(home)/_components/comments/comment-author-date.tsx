import React from 'react';

import { cn } from '@/lib/utils';

type CommentAuthorDateProps = React.HTMLAttributes<HTMLDivElement>;

export const CommentAuthorDate = ({
  className,
  ...props
}: CommentAuthorDateProps) => {
  return (
    <span
      className={cn('self-end text-xs text-muted-foreground', className)}
      {...props}
    />
  );
};
