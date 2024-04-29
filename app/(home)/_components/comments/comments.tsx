import React from 'react';

import { cn } from '@/lib/utils';

type CommentsProps = React.HTMLAttributes<HTMLDivElement>;

export const Comments = ({ className, ...props }: CommentsProps) => {
  return (
    <div className={cn('grid grid-flow-row gap-y-6', className)} {...props} />
  );
};
