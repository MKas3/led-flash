import React, { forwardRef } from 'react';
import { HTMLMotionProps, Variants } from 'framer-motion';

import { appearingContainer } from '@/config/animation';
import { cn } from '@/lib/utils';
import { MotionContainer } from '@/components/ui/motion-container';

const appearingContainerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

type AppearingContainerProps = React.ComponentPropsWithoutRef<
  typeof MotionContainer
> & {
  variant?: 'default' | 'child';
};

const AppearingContainer = forwardRef<
  React.ElementRef<typeof MotionContainer>,
  AppearingContainerProps
>(
  (
    { variant = 'default', className, viewport, isAlternate, ...props },
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
        whileInView={variant === 'default' ? 'animate' : undefined}
        viewport={{ once: true, margin: '-30%', ...viewport }}
        variants={appearingContainerVariants}
        transition={{
          duration:
            variant === 'default'
              ? appearingContainer.defaultDuration
              : appearingContainer.childDuration,
          ease: 'easeOut',
          staggerChildren: appearingContainer.staggerChildren,
        }}
        {...props}
      />
    );
  }
);
AppearingContainer.displayName = 'AppearingContainer';

export { AppearingContainer };
