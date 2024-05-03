'use client';

import { Fragment, useMemo } from 'react';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';

type WordAnimationWrapperProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: string;
  staggerChildren?: number;
  wrapperAnimationDisabled?: boolean;
};

const wordVariants: Variants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
  },
};

export const WordAnimationWrapper = ({
  children,
  className,
  staggerChildren = 0.5,
  wrapperAnimationDisabled,
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
            variants={wordVariants}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 100,
            }}
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
