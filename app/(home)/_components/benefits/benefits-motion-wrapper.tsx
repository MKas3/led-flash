'use client';

import React, { createContext, useRef } from 'react';
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useVelocity,
} from 'framer-motion';

type BenefitsContext = {
  scrollVelocity: MotionValue<number>;
};

export const BenefitsContext = createContext<BenefitsContext>({
  scrollVelocity: new MotionValue(),
});

type BenefitsMotionWrapperProps = HTMLMotionProps<'div'>;

export const BenefitsMotionWrapper = ({
  className,
  children,
  ...props
}: BenefitsMotionWrapperProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const scrollVelocity = useVelocity(scrollYProgress);
  const normalizedScrollVelocity = useTransform(
    scrollVelocity,
    [-0.5, 0, 0.5],
    [1, 0, 1]
  );

  return (
    <BenefitsContext.Provider
      value={{ scrollVelocity: normalizedScrollVelocity }}
    >
      <motion.div ref={targetRef} {...props}>
        {children}
      </motion.div>
    </BenefitsContext.Provider>
  );
};
