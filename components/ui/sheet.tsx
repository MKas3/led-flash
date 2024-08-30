'use client';

import type { VariantProps } from 'class-variance-authority';

import * as React from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close> & {
    variant?: 'default' | 'ghost';
  }
>(({ className, variant = 'default', children, ...props }, ref) => (
  <SheetPrimitive.Close
    ref={ref}
    className={cn(
      variant !== 'ghost'
      && `absolute inset-x-0 bottom-10 mx-auto size-14 rounded-full bg-muted p-3.5 ring-offset-background transition-opacity disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:opacity-100`,
      className
    )}
    {...props}
  >
    {children || (
      <>
        <X className='size-full' />
        <span className='sr-only'>Close</span>
      </>
    )}
  </SheetPrimitive.Close>
));
SheetClose.displayName = SheetPrimitive.Overlay.displayName;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      `fixed inset-0 z-30 bg-background data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  `fixed z-30 gap-4 overflow-y-auto bg-transparent px-6 pt-[var(--header-full-height)] shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out`,
  {
    defaultVariants: {
      side: 'right'
    },
    variants: {
      side: {
        bottom:
          `inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom`,
        left: `inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm`,
        right:
          `inset-y-0 right-0 size-full data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm`,
        top: `inset-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top`
      }
    }
  }
);

type SheetContentProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & VariantProps<typeof sheetVariants> & {};

const SheetInnerContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ className, side = 'right', ...props }, ref) => (
  <SheetPrimitive.Content
    ref={ref}
    className={cn(sheetVariants({ side }), className)}
    {...props}
  />
));
SheetInnerContent.displayName = SheetPrimitive.Content.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetInnerContent>,
  React.ComponentPropsWithoutRef<typeof SheetInnerContent>
>(({ children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetInnerContent ref={ref} {...props}>
      {children}
      <SheetClose />
    </SheetInnerContent>
  </SheetPortal>
));
SheetContent.displayName = SheetInnerContent.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      `flex flex-col space-y-2 text-center sm:text-left`,
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`,
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetInnerContent,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger
};
