import React from 'react';

import { cn } from '@/lib/utils';

type ServiceCardDescriptionProps = React.HTMLAttributes<HTMLDivElement>;

export const ServiceCardDescription = ({
  className,
  ...props
}: ServiceCardDescriptionProps) => {
  return (
    <span
      className={cn('text-xs sm:text-sm md:text-base', className)}
      {...props}
    />
  );
};
