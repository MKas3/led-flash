'use client';

import type { HTMLMotionProps, Variants } from 'framer-motion';

import React from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

const textPartVariants: Variants = {
  'animate-appearing': {
    y: '0em'
  },
  'initial-appearing': {
    y: '1.25em'
  }
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
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        variants={textPartVariants}
        {...props}
      />
    </span>
  );
};
