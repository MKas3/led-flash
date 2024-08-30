'use client';

import type { HTMLMotionProps } from 'framer-motion';

import React, { useContext, useEffect } from 'react';

import { appearingTextContext } from '@/components/ui/appearing-text/appearing-text';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type AppearingAnimationTextProps = HTMLMotionProps<'span'>;

export const AppearingAnimationText = ({
  className,
  children,
  ...props
}: AppearingAnimationTextProps) => {
  const { isAnimating, setHasAnimationText } = useContext(appearingTextContext);

  useEffect(() => {
    setHasAnimationText(true);
  }, [setHasAnimationText]);

  if (!isAnimating) return null;

  return (
    <motion.span
      className={cn('', className)}
      animate='animate-appearing'
      initial='initial-appearing'
      transition={{ staggerChildren: 0.3 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};
