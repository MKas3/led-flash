'use client';

import React, { useEffect } from 'react';
import {
  HTMLMotionProps,
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';

import { cn } from '@/lib/utils';

type MouseFollowerProviderProps = HTMLMotionProps<'div'>;

const mouseSpring: SpringOptions = {
  stiffness: 300,
  damping: 20,
  mass: 0.1,
};

export const MouseFollower = ({
  className,
  ...props
}: MouseFollowerProviderProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXVelocity = useVelocity(mouseX);
  const mouseYVelocity = useVelocity(mouseY);
  const mouseVelocity = useTransform(
    () => Math.abs(mouseXVelocity.get()) + Math.abs(mouseYVelocity.get())
  );
  const scaleX = useTransform(mouseVelocity, [0, 10000], [1, 4]);
  const rotateZ = useTransform(
    () =>
      (Math.atan2(mouseYVelocity.get(), mouseXVelocity.get()) * 180) / Math.PI +
      180
  );
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
        'pointer-events-none fixed mix-blend-difference md:-left-1 md:-top-1 md:z-40 md:size-2 lg:-left-1.5 lg:-top-1.5 lg:size-3 xl:-left-2 xl:-top-2 xl:size-4',
        className
      )}
      style={{
        rotateZ,
        translateX: springMouseX,
        translateY: springMouseY,
      }}
      {...props}
    >
      <motion.div
        className='absolute inset-0 rounded-full bg-foreground'
        style={{ scaleX }}
      />
    </motion.div>
  );
};
