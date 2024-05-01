import React from 'react';

import { cn } from '@/lib/utils';

type WorksItemContentProps = React.HTMLAttributes<HTMLDivElement>;

export const WorksItemContent = ({
  className,
  ...props
}: WorksItemContentProps) => {
  return (
    <div
      className={cn(
        'absolute inset-0 flex flex-col justify-between p-5 md:p-7 lg:p-9',
        className
      )}
      {...props}
    />
  );
};
