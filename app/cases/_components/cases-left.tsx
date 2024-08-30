import React from 'react';

import { cn } from '@/lib/utils';

type CasesLeftProps = React.ComponentPropsWithoutRef<'div'>;

export const CasesLeft = ({ className, ...props }: CasesLeftProps) => {
  return <div className={cn('flex flex-col gap-y-20', className)} {...props} />;
};
