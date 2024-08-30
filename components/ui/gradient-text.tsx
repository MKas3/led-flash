import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';

const GradientText = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    hasUnderline?: boolean;
  }
>(({ className, hasUnderline, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        `inline bg-gradient-to-r from-gradient-first to-gradient-second box-decoration-clone bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-box-decoration-break:clone]`,
        hasUnderline
        && `relative after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-gradient-first after:to-gradient-second`,
        className
      )}
      {...props}
    />
  );
});
GradientText.displayName = 'GradientText';

export { GradientText };
