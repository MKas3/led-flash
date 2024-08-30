import type { Variants } from 'framer-motion';

import React, { forwardRef } from 'react';

import { MotionContainer } from '@/components/ui/motion-container';
import { appearingContainer } from '@/config/animation';

import { cn } from '@/lib/utils';

const appearingContainerVariants: Variants = {
  animate: {
    opacity: 1
  },
  initial: {
    opacity: 0
  }
};

type AppearingContainerProps = React.ComponentPropsWithoutRef<
  typeof MotionContainer
> & {
  variant?: 'child' | 'default';
};

const AppearingContainer = forwardRef<
  React.ElementRef<typeof MotionContainer>,
  AppearingContainerProps
>(
  (
    {
      className,
      isAlternate,
      transition,
      variant = 'default',
      viewport,
      ...props
    },
    ref
  ) => {
    return (
      <MotionContainer
        ref={ref}
        className={cn(
          isAlternate ? 'bg-foreground' : 'bg-background',
          className
        )}
        initial={variant === 'default' ? 'initial' : undefined}
        transition={{
          duration:
            variant === 'default'
              ? appearingContainer.defaultDuration
              : appearingContainer.childDuration,
          ease: 'easeOut',
          staggerChildren: appearingContainer.staggerChildren,
          ...transition
        }}
        variants={appearingContainerVariants}
        viewport={{ margin: '-30% 0px 0px 0px', once: true, ...viewport }}
        whileInView={variant === 'default' ? 'animate' : undefined}
        {...props}
      />
    );
  }
);
AppearingContainer.displayName = 'AppearingContainer';

export { AppearingContainer };
