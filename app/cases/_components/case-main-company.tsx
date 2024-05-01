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
        'w-2/3 text-lg font-medium uppercase !leading-tight md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl',
        className
      )}
      {...props}
    />
  );
};
