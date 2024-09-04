'use client';

import * as React from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogCloseTrigger = DialogPrimitive.Close;

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogCloseTrigger>,
  React.ComponentPropsWithoutRef<typeof DialogCloseTrigger>
>(({ className, ...props }, ref) => {
  return (
    <DialogCloseTrigger
      ref={ref}
      className={cn(
        `absolute inset-x-0 -bottom-20 mx-auto flex size-16 items-center justify-center rounded-full bg-transparent text-foreground ring-offset-background transition-opacity disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:-right-4 md:-top-4 md:left-auto`,
        className
      )}
      {...props}
    >
      <X className='size-16 rounded-full bg-muted p-4 md:size-12 md:p-2' />
      <span className='sr-only'>Close</span>
    </DialogCloseTrigger>
  );
});
DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      `fixed inset-0 z-40 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogInnerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    className={cn(
      `fixed left-[50%] top-[50%] z-40 grid w-fit translate-x-[-50%] translate-y-[-50%] gap-4 rounded-sm bg-muted p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] md:bg-transparent`,
      className
    )}
    {...props}
  >
    <div className={`absolute inset-0 -z-10 hidden overflow-hidden rounded-[inherit] before:absolute before:inset-0 before:bg-muted before:[mask-composite:exclude] before:[mask-image:url("/dialog-close-mask.svg"),linear-gradient(white,white)] before:[mask-position:right_-1rem_top_-1rem,0_0] before:[mask-repeat:no-repeat] before:[mask-size:64px,100%] md:block`} />
    {children}
  </DialogPrimitive.Content>
));
DialogInnerContent.displayName = DialogPrimitive.Content.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogInnerContent ref={ref} {...props}>
      {children}
      <DialogClose />
    </DialogInnerContent>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      `flex flex-col space-y-1.5 text-center sm:text-left`,
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
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
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogInnerContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
};
