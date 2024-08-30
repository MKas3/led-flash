'use client';

import * as React from 'react';

import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    'defaultValue'
  > & {
    progressClassName?: string;
    defaultValue?: number;
  }
>(({ className, progressClassName, defaultValue, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      `relative h-14 w-full overflow-hidden rounded-sm bg-muted p-2 lg:rounded-md md:h-16 xl:h-20`,
      className
    )}
    {...props}
  >
    <div className='size-full flex-1 overflow-hidden rounded-[inherit]'>
      <ProgressPrimitive.Indicator
        className={cn(
          'size-full rounded-[inherit] bg-gradient-to-r from-gradient-first to-gradient-second transition-all',
          progressClassName
        )}
        style={{
          transform: `translateX(-${100 - (value || defaultValue || 0)}%)`
        }}
      />
    </div>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
