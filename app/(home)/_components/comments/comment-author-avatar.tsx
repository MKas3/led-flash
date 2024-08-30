import React from 'react';

import { cn } from '@/lib/utils';

type CommentAuthorAvatarProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  children?: string;
};

export const CommentAuthorAvatar = ({
  className,
  children,
  ...props
}: CommentAuthorAvatarProps) => {
  const char = children?.charAt(0);

  return (
    <div
      className={cn(
        `row-span-2 flex size-10 items-center justify-center rounded-full bg-muted-foreground uppercase text-foreground lg:size-12 lg:text-2xl xl:size-14 xl:text-3xl`,
        className
      )}
      {...props}
    >
      {char}
    </div>
  );
};
