'use client';

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { VariantProps } from 'class-variance-authority';
import {
  Box,
  HTMLMotionProps,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';

import { scrollBlurContainer } from '@/config/animation';
import { cn } from '@/lib/utils';
import { containerVariants } from '@/components/ui/container';

type ScrollBlurContainerProps = HTMLMotionProps<'div'> &
  VariantProps<typeof containerVariants> & {
    scrollOptions?: Parameters<typeof useScroll>[0];
    containerClassName?: string;
    stickyClassName?: string;
  };

const ScrollBlurContainer = forwardRef<
  HTMLDivElement,
  ScrollBlurContainerProps
>(
  (
    {
      isHero,
      padding,
      gradient,
      isAlternate,
      scrollOptions,
      containerClassName,
      stickyClassName,
      className,
      ...props
    },
    ref
  ) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ['start start', 'end start'],
      layoutEffect: true,
      ...scrollOptions,
    });
    const blur = useTransform(
      scrollYProgress,
      [0, 1],
      [0, scrollBlurContainer.maxBlur]
    );
    const scale = useTransform(
      scrollYProgress,
      [0, 1],
      [1, scrollBlurContainer.minScale]
    );
    const translateY = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);

    const filter = useMotionTemplate`blur(${blur}px)`;

    useImperativeHandle(ref, () => targetRef.current as HTMLDivElement);

    useEffect(() => {}, [stickyRef]);

    return (
      <motion.div
        ref={targetRef}
        className={cn(
          'relative',
          isAlternate ? 'bg-foreground' : 'bg-background',
          containerClassName
        )}
      >
        <motion.div
          ref={contentRef}
          className={cn(
            containerVariants({
              isHero,
              padding,
              gradient,
              isAlternate,
              className,
            })
          )}
          style={{ filter, scale, translateY }}
          {...props}
        />
      </motion.div>
    );
  }
);
ScrollBlurContainer.displayName = 'ScrollBlurContainer';

export { ScrollBlurContainer };
