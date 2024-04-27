import React from 'react';

import { cn } from '@/lib/utils';

type ArticleCardTitleProps = React.HTMLAttributes<HTMLDivElement>;

export const ArticleCardTitle = ({
  className,
  ...props
}: ArticleCardTitleProps) => {
  return (
    <h2 className={cn('mt-5 text-base font-bold', className)} {...props} />
  );
};
