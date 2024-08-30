import type { VariantProps } from 'class-variance-authority';

import React, { forwardRef } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const containerVariants = cva('relative z-10 flex flex-col', {
  defaultVariants: {
    gradient: 'none',
    isAlternate: false,
    isHero: false,
    padding: 'default'
  },
  variants: {
    gradient: {
      'none': '',
      'to-right':
        `before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-gradient-first before:to-gradient-second before:blur-[12.5vw]`,
      'to-top':
        `before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-t before:from-gradient-first before:to-gradient-second before:blur-[12.5vw]`
    },
    isAlternate: {
      false: '',
      true: 'bg-foreground text-background'
    },
    isHero: {
      false: '',
      true: `py-[var(--header-full-height-sm)] md:py-[var(--header-full-height)]`
    },
    padding: {
      default:
        `px-container-sm md:px-container-md lg:px-container-lg xl:px-container`,
      none: ''
    }
  }
});

type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, gradient, isAlternate, isHero, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          containerVariants({
            className,
            gradient,
            isAlternate,
            isHero,
            padding
          })
        )}
        {...props}
      />
    );
  }
);
Container.displayName = 'Container';

export { Container };
