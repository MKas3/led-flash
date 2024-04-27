import React from 'react';

import { cn } from '@/lib/utils';

type ConstructorWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const ConstructorWrapper = ({
  className,
  ...props
}: ConstructorWrapperProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 items-start justify-between lg:grid-cols-2 lg:gap-y-4 xl:gap-x-10 2xl:gap-x-56',
        className
      )}
      {...props}
    />
  );
};
