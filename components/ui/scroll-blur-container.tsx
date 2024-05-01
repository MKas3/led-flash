'use client';

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { VariantProps } from 'class-variance-authority';
import {
  animate,
  HTMLMotionProps,
  motion,
  scroll,
  transform,
  useMotionTemplate,
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
    stickyPadding?: string;
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
      stickyPadding,
      className,
      ...props
    },
    ref
  ) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [heightInitialized, setHeightInitialized] = useState(false);

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

    const filter = useMotionTemplate`blur(${blur}px)`;

    useImperativeHandle(ref, () => targetRef.current as HTMLDivElement);

    useEffect(() => {
      if (!contentRef.current || !targetRef.current) return;

      const height = contentRef.current.offsetHeight;
      targetRef.current.style.setProperty('--height', `${height}px`);
      setHeightInitialized(true);
    }, [targetRef, contentRef]);

    return (
      <div
        ref={targetRef}
        className={cn(
          'relative',
          heightInitialized && 'h-[var(--height,0px)]',
          isAlternate ? 'bg-foreground' : 'bg-background',
          containerClassName
        )}
      >
        <div
          className={cn(
            'sticky',
            heightInitialized && `-top-[calc(var(--height)-100vh)] h-0`,
            stickyClassName
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
            style={{ filter }}
            {...props}
          />
        </div>
      </div>
    );
  }
);
ScrollBlurContainer.displayName = 'ScrollBlurContainer';

export { ScrollBlurContainer };
