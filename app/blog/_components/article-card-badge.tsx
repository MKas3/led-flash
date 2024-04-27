import React from 'react';

import { cn } from '@/lib/utils';

type ArticleCardBadgeProps = React.HTMLAttributes<HTMLDivElement>;

export const ArticleCardBadge = ({
  className,
  ...props
}: ArticleCardBadgeProps) => {
  return (
    <div
      className={cn(
        'absolute bottom-4 left-4 rounded-full bg-foreground px-3 py-1 text-xs text-background',
        className
      )}
      {...props}
    />
  );
};
