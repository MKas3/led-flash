import React from 'react';

import { cn } from '@/lib/utils';
import { AppearingContainer } from '@/components/ui/appearing-container';

type CommentsProps = React.ComponentPropsWithoutRef<typeof AppearingContainer>;

export const Comments = ({ className, ...props }: CommentsProps) => {
  return (
    <AppearingContainer
      className={cn(
        'grid w-full grid-flow-row gap-y-4 bg-transparent md:gap-y-5 lg:gap-y-6',
        className
      )}
      padding='none'
      transition={{ delay: 0.3, delayChildren: 0.3 }}
      {...props}
    />
  );
};
