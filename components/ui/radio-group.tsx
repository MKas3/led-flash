'use client';

import * as React from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn } from '@/lib/utils';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Indicator
      ref={ref}
      className={cn('flex items-center justify-center', className)}
      {...props}
    />
  );
});
RadioGroupIndicator.displayName = RadioGroupPrimitive.Indicator.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    indicatorHidden?: boolean;
  }
>(({ className, indicatorHidden, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        `size-4 rounded-full border border-foreground text-foreground ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:outline-none`,
        className
      )}
      {...props}
    >
      {!indicatorHidden && (
        <RadioGroupIndicator>
          <Circle className='size-2.5 fill-current text-current' />
        </RadioGroupIndicator>
      )}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupIndicator, RadioGroupItem };
