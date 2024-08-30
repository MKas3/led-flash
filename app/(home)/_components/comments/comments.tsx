import React from 'react';

import { AppearingContainer } from '@/components/ui/appearing-container';

import { cn } from '@/lib/utils';

type CommentsProps = React.ComponentPropsWithoutRef<typeof AppearingContainer>;

export const Comments = ({ className, ...props }: CommentsProps) => {
  return (
    <AppearingContainer
      className={cn(
        `grid w-full grid-flow-row gap-y-4 bg-transparent lg:gap-y-6 md:gap-y-5`,
        className
      )}
      padding='none'
      transition={{ delay: 0.3, delayChildren: 0.3, staggerChildren: 0.15 }}
      {...props}
    />
  );
};
