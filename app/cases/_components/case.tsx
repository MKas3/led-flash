import React from 'react';

import { cn } from '@/lib/utils';

type CaseProps = React.ComponentPropsWithoutRef<'div'>;

export const Case = ({ className, ...props }: CaseProps) => {
  return <div className={cn('case flex w-full group-has-[.case:hover]:opacity-60 hover:!opacity-100 transition-all hover:scale-105 duration-500 flex-col gap-y-4', className)} {...props} />;
};
