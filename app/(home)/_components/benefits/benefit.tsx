'use client';

import React, { createContext, useContext, useEffect, useRef } from 'react';
import {
  animate,
  HTMLMotionProps,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

import { benefitAnimationDuration } from '@/config/home/benefits';
import { cn } from '@/lib/utils';
import { BenefitsContext } from '@/app/(home)/_components/benefits/benefits-motion-wrapper';

type BenefitProps = HTMLMotionProps<'div'> & {
  benefitIndex: number;
};

type BenefitContext = {
  realBorderOpacity: MotionValue<number>;
};

export const BenefitContext = createContext<BenefitContext>({
  realBorderOpacity: new MotionValue(),
});

export const Benefit = ({
  benefitIndex,
  className,
  children,
  ...props
}: BenefitProps) => {
  const { scrollVelocity } = useContext(BenefitsContext);
  const zIndex = useMotionValue(0);
  const currentOpacity = useTransform(() =>
    zIndex.get() >= 1 ? scrollVelocity.get() : 0
  );
  const springCurrentOpacity = useSpring(currentOpacity, {
    stiffness: 100,
    damping: 10,
    mass: 2,
    restDelta: 0.000001,
  });
  const scale = useTransform(springCurrentOpacity, [0, 1], [1, 1.25]);

  useEffect(() => {
    const animation = animate(0, 10, {
      delay: benefitAnimationDuration * benefitIndex,
      duration: benefitAnimationDuration,
      repeatDelay: benefitAnimationDuration * 3,
      repeat: Infinity,
      onUpdate: (latest) => zIndex.jump(Math.round(latest) % 10),
    });

    return () => {
      animation.stop();
    };
  }, [benefitIndex, zIndex]);

  return (
    <BenefitContext.Provider
      value={{ realBorderOpacity: springCurrentOpacity }}
    >
      <motion.div className='flex' style={{ scale, zIndex }} {...props}>
        <div
          className={cn(
            'relative flex flex-1 flex-col justify-between gap-y-16 rounded-sm border border-muted-foreground bg-popover p-6 transition-transform duration-500 after:absolute after:inset-px after:-z-10 after:rounded-[inherit] after:bg-popover hover:scale-110',
            className
          )}
        >
          <>
            {children}
            <motion.div
              className='absolute inset-0 -z-10 rounded-[inherit] bg-gradient-to-r from-gradient-first to-gradient-second'
              style={{ opacity: springCurrentOpacity }}
            />
            <motion.div
              className='absolute inset-0 -z-10 rounded-[inherit] bg-gradient-to-r from-gradient-first to-gradient-second blur-[10px]'
              style={{ opacity: springCurrentOpacity }}
            />
          </>
        </div>
      </motion.div>
    </BenefitContext.Provider>
  );
};
