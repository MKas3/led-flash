import React from 'react';

import { cn } from '@/lib/utils';

type CommentNamingProps = React.HTMLAttributes<HTMLDivElement>;

export const CommentNaming = ({ className, ...props }: CommentNamingProps) => {
  return <span className={cn('font-bold', className)} {...props} />;
};
