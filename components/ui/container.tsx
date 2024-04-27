import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants>;

export const containerVariants = cva('relative flex flex-col overflow-hidden', {
  variants: {
    isHero: {
      true: 'pt-[var(--header-full-height-sm)] md:pt-[var(--header-full-height)]',
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
  },
  defaultVariants: {
    isHero: false,
    padding: 'default',
    gradient: 'none',
  },
});

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ isHero, padding, gradient, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          containerVariants({ padding, gradient, isHero, className })
        )}
        {...props}
      />
    );
  }
);
Container.displayName = 'Container';

export { Container };
