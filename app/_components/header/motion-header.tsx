'use client';

import type {
  Variants
} from 'framer-motion';

import React, { useLayoutEffect, useRef, useState } from 'react';

import { Header } from '@/app/_components/header/header';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useVelocity
} from 'framer-motion';

const InternalMotionHeader = motion.create(Header);

const headerVariants: Variants = {
  animate: {
    translateY: -110
  },
  initial: {
    translateY: 0
  }
};

type MotionHeaderProps = React.ComponentPropsWithoutRef<typeof InternalMotionHeader>;

export const MotionHeader = ({ ...props }: MotionHeaderProps) => {
  const ref = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);

  const [visible, setVisible] = useState(true);

  const { scrollY } = useScroll();
  const scrollYVelocity = useVelocity(scrollY);

  useMotionValueEvent(scrollYVelocity, 'change', (latestValue) => {
    if (latestValue < 0 || scrollY.get() < height * 5)
      setVisible(true);
    else if (latestValue !== 0)
      setVisible(false);
  });

  useLayoutEffect(() => {
    setHeight(ref.current?.clientHeight ?? 0);
  }, []);

  return <InternalMotionHeader ref={ref} animate={visible ? 'initial' : 'animate'} initial='initial' transition={{ duration: 0.3, ease: 'easeInOut' }} variants={headerVariants} {...props} />;
};
