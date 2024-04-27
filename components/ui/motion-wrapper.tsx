'use client';

import { forwardRef } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

export const MotionWrapper = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  ({ ...props }, ref) => {
    return <motion.div ref={ref} {...props} />;
  }
);
MotionWrapper.displayName = 'MotionWrapper';
