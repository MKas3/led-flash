import React from 'react';

import { cn } from '@/lib/utils';

type CommentsProps = React.HTMLAttributes<HTMLDivElement>;

export const Comments = ({ className, ...props }: CommentsProps) => {
  return (
    <div
      className={cn(
        'grid w-full grid-flow-row gap-y-4 md:gap-y-5 lg:gap-y-6',
        className
      )}
      {...props}
    />
  );
};
