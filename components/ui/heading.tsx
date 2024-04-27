import { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

const headingVariants = cva('', {
  variants: {
    as: {
      h1: 'text-3xl font-bold uppercase !leading-tight md:text-6xl lg:text-7xl 2xl:text-8xl',
      h2: 'text-2xl font-bold uppercase !leading-tight md:text-3xl lg:text-4xl 2xl:text-5xl',
      h3: 'text-base font-bold !leading-tight md:text-lg lg:text-2xl',
    },
    hasUnderline: {
      true: 'border-b border-white pb-6 md:pb-9 lg:pb-12 [&_~_*]:mt-6 md:[&_~_*]:mt-9 lg:[&_~_*]:mt-12',
      false: '',
    },
  },
  defaultVariants: {
    as: 'h1',
    hasUnderline: false,
  },
});

export const Heading = ({
  as,
  hasUnderline,
  className,
  ...props
}: HeadingProps) => {
  const Comp = as ?? 'h1';

  return (
    <Comp
      className={cn(headingVariants({ as, hasUnderline, className }))}
      {...props}
    />
  );
};
