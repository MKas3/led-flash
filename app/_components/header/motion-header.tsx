'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';

import { Header } from '@/app/_components/header/header';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useVelocity
} from 'framer-motion';

const InternalMotionHeader = motion.create(Header);

type MotionHeaderProps = React.ComponentPropsWithoutRef<typeof InternalMotionHeader>;

export const MotionHeader = ({ ...props }: MotionHeaderProps) => {
  const ref = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);

  const rawTranslateY = useMotionValue(0);
  const springTranslateY = useSpring(rawTranslateY, {
    damping: 40,
    stiffness: 300
  });
  const translateY = useMotionTemplate`${springTranslateY}%`;

  const { scrollY } = useScroll();
  const scrollYVelocity = useVelocity(scrollY);

  useMotionValueEvent(scrollYVelocity, 'change', (latestValue) => {
    if (latestValue < 0 || scrollY.get() < height * 5)
      rawTranslateY.set(0);
    else if (latestValue !== 0)
      rawTranslateY.set(-110);
  });

  useLayoutEffect(() => {
    setHeight(ref.current?.clientHeight ?? 0);
  }, []);

  return <InternalMotionHeader ref={ref} style={{ translateY }} {...props} />;
};
