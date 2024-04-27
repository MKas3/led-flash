'use client';

import React, { useContext, useEffect, useState } from 'react';
import {
  AnimationPlaybackControls,
  HTMLMotionProps,
  motion,
  useAnimate,
  useSpring,
} from 'framer-motion';

import {
  defaultSpinDuration,
  defaultSpinToStartDuration,
} from '@/config/home/constructor';
import { cn } from '@/lib/utils';
import { ConstructorContext } from '@/app/(home)/_components/constructor/constructor-provider';

type ConstructorSpinProps = HTMLMotionProps<'div'>;

export const ConstructorSpin = ({
  className,
  ...props
}: ConstructorSpinProps) => {
  const { isPaused, setIsPausedAnimating, speedModifier } =
    useContext(ConstructorContext);
  const [scope, animate] = useAnimate();
  const [spinAnimation, setSpinAnimation] = useState<
    AnimationPlaybackControls | undefined
  >();

  const springSpeedModifier = useSpring(speedModifier, {
    stiffness: 300,
    damping: 80,
  });

  useEffect(() => {
    if (!isPaused) {
      setSpinAnimation(
        animate(
          scope.current,
          { rotate: [0, 360] },
          {
            duration: defaultSpinDuration,
            repeat: Infinity,
            ease: 'linear',
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
        'pointer-events-none aspect-square w-full shrink-0',
        className
      )}
      {...props}
    />
  );
};
