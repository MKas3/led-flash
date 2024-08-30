import type { VariantProps } from 'class-variance-authority';

import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-sm text-base font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:rounded-md lg:rounded-default lg:text-xl`,
  {
    defaultVariants: {
      size: 'default',
      variant: 'ghost'
    },
    variants: {
      size: {
        default: `px-10 py-6 lg:px-12 lg:py-8 2xl:px-16 2xl:py-9`,
        icon: 'size-10',
        lg: 'h-11 px-8',
        medium: 'rounded-sm px-12 py-6 md:rounded-sm lg:rounded-sm',
        sm: 'h-9 px-3',
        xs: 'px-7 py-4'
      },
      variant: {
        foreground: 'bg-foreground text-background hover:opacity-90',
        ghost: '',
        gradient:
          'bg-gradient-to-r from-gradient-first to-gradient-second text-foreground hover:opacity-90',
        link: `underline-offset-4 hover:underline`,
        outline: `border-2 border-foreground bg-black/30 md:border-4`
      }
    }
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ className, size, variant }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
