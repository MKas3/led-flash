import React from 'react';

import { cn } from '@/lib/utils';

type CommentAuthorProps = React.HTMLAttributes<HTMLDivElement>;

export const CommentAuthor = ({ className, ...props }: CommentAuthorProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-[auto_auto_auto] gap-y-0.5 rounded-sm bg-muted p-6 text-foreground',
        className
      )}
      {...props}
    />
  );
};
