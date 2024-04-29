import React from 'react';

import { cn } from '@/lib/utils';

type CaseMainCompanyProps = React.HTMLAttributes<HTMLSpanElement>;

export const CaseMainCompany = ({
  className,
  ...props
}: CaseMainCompanyProps) => {
  return (
    <span
      className={cn(
        'w-2/3 text-xl font-medium uppercase md:text-2xl lg:text-3xl xl:text-4xl',
        className
      )}
      {...props}
    />
  );
};
