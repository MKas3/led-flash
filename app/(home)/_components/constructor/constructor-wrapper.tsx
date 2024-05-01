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
        'grid grid-cols-1 grid-rows-[min-content_minmax(0,1fr)] items-start md:grid-rows-1 md:justify-between lg:grid-cols-2 lg:gap-y-4 xl:gap-x-10 2xl:gap-x-56',
        className
      )}
      {...props}
    />
  );
};
