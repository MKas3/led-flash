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
        'relative size-6 text-muted-foreground transition-colors duration-1000 group-[.is-snapped]:text-gradient-first md:size-10 lg:size-14',
        className
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          'absolute inset-0 size-full opacity-0 blur-[5px] transition group-[.is-snapped]:opacity-100 lg:blur-[10px]',
          className
        )}
        {...props}
      >
        {children}
      </span>
    </span>
  );
};
