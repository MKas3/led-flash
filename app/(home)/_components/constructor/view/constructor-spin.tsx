'use client';

import type {
  AnimationPlaybackControls,
  HTMLMotionProps
} from 'framer-motion';

import React, { useContext, useEffect, useState } from 'react';

import { constructorContext } from '@/app/(home)/_components/constructor/constructor-provider';
import {
  defaultSpinDuration,
  defaultSpinToStartDuration
} from '@/config/home/constructor';
import {
  motion,
  useAnimate,
  useSpring
} from 'framer-motion';

import { cn } from '@/lib/utils';

type ConstructorSpinProps = HTMLMotionProps<'div'>;

export const ConstructorSpin = ({
  className,
  ...props
}: ConstructorSpinProps) => {
  const { isPaused, setIsPausedAnimating, speedModifier }
    = useContext(constructorContext);
  const [scope, animate] = useAnimate();
  const [spinAnimation, setSpinAnimation] = useState<
    AnimationPlaybackControls | undefined
  >();

  const springSpeedModifier = useSpring(speedModifier, {
    damping: 80,
    stiffness: 300
  });

  useEffect(() => {
    if (!isPaused) {
      setSpinAnimation(
        animate(
          scope.current,
          { rotate: [0, 360] },
          {
            duration: defaultSpinDuration,
            ease: 'linear',
            repeat: Infinity
          }
        )
      );
    } else {
      setIsPausedAnimating(true);
      animate(
        scope.current,
        { rotate: 360 },
        { duration: defaultSpinToStartDuration, ease: 'easeOut' }
      ).then(() => setIsPausedAnimating(false));
    }
  }, [animate, isPaused, scope, setIsPausedAnimating]);

  useEffect(() => {
    if (isPaused) springSpeedModifier.jump(speedModifier);
    else springSpeedModifier.set(speedModifier);
  }, [isPaused, speedModifier, springSpeedModifier]);

  useEffect(() => {
    if (!spinAnimation) return;

    spinAnimation.speed = springSpeedModifier.get();

    return springSpeedModifier.on('change', (latestValue) => {
      spinAnimation.speed = latestValue;
    });
  }, [spinAnimation, isPaused, springSpeedModifier]);

  return (
    <motion.div
      ref={scope}
      className={cn(
        `pointer-events-none aspect-square w-[80vw] shrink-0 md:w-full`,
        className
      )}
      {...props}
    />
  );
};
