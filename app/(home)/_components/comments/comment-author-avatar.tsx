import React from 'react';

import { cn } from '@/lib/utils';

type CommentAuthorAvatarProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  children?: string;
};

export const CommentAuthorAvatar = ({
  children,
  className,
  ...props
}: CommentAuthorAvatarProps) => {
  const char = children?.charAt(0);

  return (
    <div
      className={cn(
        'row-span-2 flex size-14 items-center justify-center rounded-full bg-muted-foreground text-3xl uppercase text-foreground',
        className
      )}
      {...props}
    >
      {char}
    </div>
  );
};
