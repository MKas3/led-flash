import React from 'react';

import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

type CommentsStarsProps = React.HTMLAttributes<HTMLDivElement> & {
  rating: number;
};

export const CommentsStars = ({
  rating,
  className,
  ...props
}: CommentsStarsProps) => {
  return (
    <div
      className={cn(
        'row-span-2 grid grid-cols-[repeat(5,26px)] items-center',
        className
      )}
      {...props}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon.Star
          key={index}
          className={cn(
            'size-5 xl:size-6',
            rating >= index ? 'text-yellow-500' : 'text-muted-foreground'
          )}
        />
      ))}
    </div>
  );
};
