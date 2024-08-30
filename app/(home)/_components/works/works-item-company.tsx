import React from 'react';

import { cn } from '@/lib/utils';

type WorksItemCompanyProps = React.HTMLAttributes<HTMLDivElement>;

export const WorksItemCompany = ({
  className,
  ...props
}: WorksItemCompanyProps) => {
  return (
    <span
      className={cn(
        `w-2/3 text-xl font-bold uppercase lg:text-3xl md:text-2xl xl:text-4xl`,
        className
      )}
      {...props}
    />
  );
};
