'use client';

import * as React from 'react';

import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const SliderRoot = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      `relative flex h-9 w-full touch-none select-none items-center 2xl:h-14 md:h-10 xl:h-11`,
      className
    )}
    {...props}
  />
));
SliderRoot.displayName = SliderPrimitive.Root.displayName;

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Track
    ref={ref}
    className={cn(
      'relative size-full grow overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
SliderTrack.displayName = SliderPrimitive.Track.displayName;

const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Range>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Range
    ref={ref}
    className={cn('absolute size-full bg-background', className)}
    {...props}
  />
));
SliderRange.displayName = SliderPrimitive.Range.displayName;

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Thumb
    ref={ref}
    className={cn(
      `block aspect-square size-7 rounded-full border-2 border-foreground bg-background outline-4 outline-offset-4 ring-offset-background transition-colors 2xl:size-11 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-ring md:size-8 xl:size-9`,
      className
    )}
    aria-label='Choose a value'
    {...props}
  />
));
SliderThumb.displayName = SliderPrimitive.Thumb.displayName;

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ ...props }, ref) => (
  <SliderRoot ref={ref} {...props}>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider, SliderRange, SliderRoot, SliderThumb, SliderTrack };
