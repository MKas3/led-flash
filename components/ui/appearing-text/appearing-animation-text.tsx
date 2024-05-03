'use client';

import React, { useContext, useEffect } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { AppearingTextContext } from '@/components/ui/appearing-text/appearing-text';

type AppearingAnimationTextProps = HTMLMotionProps<'span'>;

export const AppearingAnimationText = ({
  className,
  children,
  ...props
}: AppearingAnimationTextProps) => {
  const { isAnimating, setHasAnimationText } = useContext(AppearingTextContext);

  useEffect(() => {
    setHasAnimationText(true);
  }, [setHasAnimationText]);

  if (!isAnimating) return null;

  return (
    <motion.span
      className={cn('', className)}
      initial='initial-appearing'
      animate='animate-appearing'
      transition={{ staggerChildren: 0.3 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};
