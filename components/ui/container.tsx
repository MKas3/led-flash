import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const containerVariants = cva('relative z-10 flex flex-col', {
  variants: {
    isHero: {
      true: 'py-[var(--header-full-height-sm)] md:py-[var(--header-full-height)]',
      false: '',
    },
    padding: {
      default:
        'px-container-sm md:px-container-md lg:px-container-lg xl:px-container',
      none: '',
    },
    gradient: {
      none: '',
      'to-top':
        'before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-t before:from-gradient-first before:to-gradient-second before:blur-[12.5vw]',
      'to-right':
        'before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-gradient-first before:to-gradient-second before:blur-[12.5vw]',
    },
    isAlternate: {
      true: 'bg-foreground text-background',
      false: '',
    },
  },
  defaultVariants: {
    isHero: false,
    padding: 'default',
    gradient: 'none',
    isAlternate: false,
  },
});

type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ isHero, padding, gradient, isAlternate, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          containerVariants({
            padding,
            gradient,
            isHero,
            isAlternate,
            className,
          })
        )}
        {...props}
      />
    );
  }
);
Container.displayName = 'Container';

export { Container };
