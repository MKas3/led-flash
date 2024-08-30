'use client';

import type { HTMLMotionProps, Variants } from 'framer-motion';

import { useMemo } from 'react';

import { motion } from 'framer-motion';

type WordAnimationWrapperProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: string;
  staggerChildren?: number;
  wrapperAnimationDisabled?: boolean;
};

const wordVariants: Variants = {
  animate: {
    y: 0
  },
  initial: {
    y: '100%'
  }
};

export const WordAnimationWrapper = ({
  className,
  staggerChildren = 0.5,
  wrapperAnimationDisabled,
  children,
  ...props
}: WordAnimationWrapperProps) => {
  const words = useMemo(() => children.split(' '), [children]);

  return (
    <motion.span
      className={className}
      animate={wrapperAnimationDisabled ? undefined : 'animate'}
      initial={wrapperAnimationDisabled ? undefined : 'initial'}
      transition={wrapperAnimationDisabled ? undefined : { staggerChildren }}
    >
      {words.map((item, index) => (
        <span key={index} className='inline-block overflow-y-hidden'>
          <motion.span
            className='inline-block'
            transition={{
              damping: 100,
              stiffness: 300,
              type: 'spring'
            }}
            variants={wordVariants}
            {...props}
          >
            {item}
          </motion.span>
          {index !== words.length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </motion.span>
  );
};
