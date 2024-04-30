import React from 'react';

import { cn } from '@/lib/utils';

type BenefitIconProps = React.HTMLAttributes<HTMLSpanElement>;

export const BenefitIcon = ({
  className,
  children,
  ...props
}: BenefitIconProps) => {
  return (
    <span
      className={cn(
        'relative size-14 text-muted-foreground transition-colors duration-1000 group-[.is-snapped]:text-gradient-first',
        className
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          'absolute inset-0 size-16 opacity-0 blur-[10px] transition group-[.is-snapped]:opacity-100',
          className
        )}
        {...props}
      >
        {children}
      </span>
    </span>
  );
};
