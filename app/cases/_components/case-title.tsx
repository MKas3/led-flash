import React from 'react';

import { Heading } from '@/components/ui/heading';

import { cn } from '@/lib/utils';

type CaseTitleProps = React.ComponentPropsWithoutRef<'div'>;

export const CaseTitle = ({ className, ...props }: CaseTitleProps) => {
  return <Heading className={cn('!text-lg font-medium normal-case', className)} as='h2' {...props}></Heading>;
};
