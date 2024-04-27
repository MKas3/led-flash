import React from 'react';

import { cn } from '@/lib/utils';

type ArticleCardViewsProps = React.HTMLAttributes<HTMLDivElement>;

export const ArticleCardViews = ({
  className,
  ...props
}: ArticleCardViewsProps) => {
  return (
    <span
      className={cn('mt-2.5 text-xs text-muted-foreground', className)}
      {...props}
    />
  );
};
