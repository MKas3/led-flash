import React from 'react';

import { cn } from '@/lib/utils';

type ServiceCardProps = React.HTMLAttributes<HTMLDivElement>;

export const ServiceCard = ({ className, ...props }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-y-3 rounded-sm bg-popover p-5 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-gradient-first before:via-gradient-second before:to-transparent before:bg-[length:0%_0%] before:bg-center before:bg-no-repeat before:blur-2xl before:transition-all before:duration-1000 hover:before:bg-[length:100%_100%] md:rounded-default md:p-7 lg:gap-y-6 lg:p-9 2xl:gap-y-3 2xl:p-12',
        className
      )}
      {...props}
    />
  );
};
