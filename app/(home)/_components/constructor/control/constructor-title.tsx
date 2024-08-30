import React from 'react';

import { cn } from '@/lib/utils';

type ConstructorTitleProps = React.HTMLAttributes<HTMLSpanElement>;

export const ConstructorTitle = ({
  className,
  ...props
}: ConstructorTitleProps) => {
  return (
    <span
      className={cn(`text-xs lg:text-xl md:text-base xl:text-2xl`, className)}
      {...props}
    />
  );
};
