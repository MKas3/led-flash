'use client';

import React, { useEffect } from 'react';

import { useCasesMouseFollower } from '@/app/cases/_components/cases-mouse-follower-provider';
import Icon from '@/components/ui/icon';
import { type SpringOptions, motion, useMotionValue, useSpring } from 'framer-motion';

import { cn } from '@/lib/utils';

const mouseSpring: SpringOptions = {
  damping: 20,
  mass: 0.1,
  stiffness: 400
};

const scaleSpring: SpringOptions = {
  damping: 20,
  mass: 0.1,
  stiffness: 600
};

type CasesMouseFollowerProps = React.ComponentPropsWithoutRef<typeof motion.div>;

export const CasesMouseFollower = ({ className, ...props }: CasesMouseFollowerProps) => {
  const { activeCase, state } = useCasesMouseFollower();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, mouseSpring);
  const springMouseY = useSpring(mouseY, mouseSpring);

  const scale = useMotionValue(0);
  const springScale = useSpring(scale, scaleSpring);

  useEffect(() => {
    if (activeCase === undefined) {
      scale.set(0);
    } else if (state === 'idle') {
      scale.set(1);
    } else {
      scale.set(3);
    }
  }, [activeCase, scale, state]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
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
        `pointer-events-none hidden md:flex items-center justify-center md:p-0.5 xl:p-1 2xl:p-1.5 fixed rounded-full duration-100 transition-colors scale-100 ring-[0.5px] ring-foreground lg:-left-1.5 lg:-top-1.5 lg:size-3 md:-left-1.5 md:-top-2 md:z-40 md:size-4 xl:-left-1.5 overflow-hidden xl:-top-2 xl:size-4 2xl:size-6 2xl:-top-3 2xl:-left-2`,
        state === 'idle' ? 'bg-foreground' : 'bg-transparent',
        className
      )}
      style={{
        scale: springScale,
        translateX: springMouseX,
        translateY: springMouseY
      }}
      {...props}
    >
      <Icon.ArrowRight className={cn('transition-transform', state === 'idle' && 'opacity-0', state === 'left' ? 'rotate-180' : 'rotate-0')} />
    </motion.div>
  );
};
