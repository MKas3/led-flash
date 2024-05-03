'use client';

import React from 'react';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';

import { cn } from '@/lib/utils';

const textPartVariants: Variants = {
  'initial-appearing': {
    y: '1.25em',
  },
  'animate-appearing': {
    y: '0em',
  },
};

type AppearingAnimationTextPartProps = HTMLMotionProps<'span'>;

export const AppearingAnimationTextPart = ({
  className,
  ...props
}: AppearingAnimationTextPartProps) => {
  return (
    <span className='inline-flex overflow-hidden'>
      <motion.span
        className={cn('inline-flex', className)}
        variants={textPartVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        {...props}
      />
    </span>
  );
};
