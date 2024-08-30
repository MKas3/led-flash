'use client';

import type { VariantProps } from 'class-variance-authority';

import * as React from 'react';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

const tabsListVariants = cva(
  `inline-flex w-fit items-center justify-between rounded-full p-1 text-foreground md:p-1.5`,
  {
    defaultVariants: {
      size: 'default',
      variant: 'default'
    },
    variants: {
      size: {
        default:
          `text-xs *:px-5 *:py-1 sm:text-base md:*:px-8 md:*:py-1.5 lg:*:px-4 xl:text-xl`,
        lg: `lg:text-md text-xs *:px-4 *:py-2 sm:text-base md:*:px-5 md:*:py-1.5 lg:*:px-6 xl:text-lg xl:*:py-2 2xl:text-xl`,
        sm: `text-xs *:px-2.5 *:py-1 md:text-lg md:*:py-1.5 xl:text-xl xl:*:px-3 2xl:*:px-4`
      },
      variant: {
        default: `bg-muted-foreground [&_[data-state=active]]:bg-muted`,
        ghost: '',
        reverse: `bg-muted [&_[data-state=active]]:bg-muted-foreground`
      }
    }
  }
);

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>
>(({ className, size, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ className, size, variant }))}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      `inline-flex w-full items-center justify-center whitespace-nowrap rounded-full font-medium text-foreground ring-offset-background transition-all data-[state=active]:shadow-sm disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      `ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
