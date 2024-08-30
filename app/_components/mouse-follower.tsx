'use client';

import type {
  HTMLMotionProps,
  SpringOptions
} from 'framer-motion';

import React, { useEffect } from 'react';

import {
  motion,
  useMotionValue,
  useSpring
} from 'framer-motion';

import { cn } from '@/lib/utils';

type MouseFollowerProviderProps = HTMLMotionProps<'div'>;

const mouseSpring: SpringOptions = {
  damping: 20,
  mass: 0.1,
  stiffness: 300
};

export const MouseFollower = ({
  className,
  ...props
}: MouseFollowerProviderProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, mouseSpring);
  const springMouseY = useSpring(mouseY, mouseSpring);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={cn(
        `pointer-events-none fixed rounded-full bg-foreground mix-blend-difference lg:-left-1.5 lg:-top-1.5 lg:size-3 md:-left-1 md:-top-1 md:z-40 md:size-2 xl:-left-2 xl:-top-2 xl:size-4`,
        className
      )}
      style={{
        translateX: springMouseX,
        translateY: springMouseY
      }}
      {...props}
    />
  );
};
