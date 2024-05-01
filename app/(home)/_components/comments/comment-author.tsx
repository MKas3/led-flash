import React from 'react';

import { cn } from '@/lib/utils';

type CommentAuthorProps = React.HTMLAttributes<HTMLDivElement>;

export const CommentAuthor = ({ className, ...props }: CommentAuthorProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-[min-content_minmax(0,1fr)_min-content] gap-x-4 gap-y-0.5 rounded-sm bg-muted p-6 text-foreground xl:text-sm 2xl:text-base',
        className
      )}
      {...props}
    />
  );
};
