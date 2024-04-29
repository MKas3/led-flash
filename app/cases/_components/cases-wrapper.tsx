import React from 'react';

import { cn } from '@/lib/utils';

type CasesWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const CasesWrapper = ({ className, ...props }: CasesWrapperProps) => {
  return <div className={cn('relative', className)} {...props} />;
};
