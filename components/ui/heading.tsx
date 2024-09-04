import type { HTMLAttributes } from 'react';

import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

const headingVariants = cva('relative', {
  defaultVariants: {
    as: 'h1',
    hasUnderline: false,
    padding: 'none'
  },
  variants: {
    as: {
      h1: `text-3xl font-bold uppercase !leading-tight md:text-6xl lg:text-7xl 2xl:text-8xl`,
      h2: `text-2xl font-bold uppercase !leading-tight md:text-3xl lg:text-4xl 2xl:text-5xl`,
      h3: `text-base font-bold !leading-tight md:text-lg lg:text-2xl`
    },
    hasUnderline: {
      false: '',
      true: `overflow-hidden pb-6 before:pointer-events-none before:absolute before:inset-0 before:block before:border-b before:border-white before:delay-1000 before:duration-1500 before:ease-out before:animate-in before:fade-in before:slide-in-from-left before:fill-mode-both md:pb-9 lg:pb-12 [&_~_*]:mt-6 md:[&_~_*]:mt-9 lg:[&_~_*]:mt-12`
    },
    padding: {
      container:
        `px-container-sm md:px-container-md lg:px-container-lg xl:px-container`,
      none: ''
    }
  }
});

export const Heading = ({
  className,
  as,
  hasUnderline,
  padding,
  ...props
}: HeadingProps) => {
  const Comp = as ?? 'h1';

  return (
    <Comp
      className={cn(headingVariants({ className, as, hasUnderline, padding }))}
      {...props}
    />
  );
};
