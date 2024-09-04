'use client';

import type { VariantProps } from 'class-variance-authority';
import type {
  HTMLMotionProps
} from 'framer-motion';

import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from 'react';

import { containerVariants } from '@/components/ui/container';
import { scrollBlurContainer } from '@/config/animation';
import {
  motion
  ,
  useMotionTemplate,
  useScroll,
  useTransform
} from 'framer-motion';

import { cn } from '@/lib/utils';

type ScrollBlurContainerProps = HTMLMotionProps<'div'> &
  VariantProps<typeof containerVariants> & {
    containerClassName?: string;
    stickyClassName?: string;
    scrollOptions?: Parameters<typeof useScroll>[0];
    stickyPadding?: string;
  };

const ScrollBlurContainer = forwardRef<
  HTMLDivElement,
  ScrollBlurContainerProps
>(
  (
    {
      className,
      containerClassName,
      stickyClassName,
      gradient,
      isAlternate,
      isHero,
      padding,
      scrollOptions,
      stickyPadding,
      ...props
    },
    ref
  ) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [heightInitialized, setHeightInitialized] = useState(false);

    const { scrollYProgress } = useScroll({
      layoutEffect: true,
      offset: ['end end', 'end start'],
      target: targetRef,
      ...scrollOptions
    });
    const blur = useTransform(
      scrollYProgress,
      [0, 1],
      [0, scrollBlurContainer.maxBlur]
    );

    const filter = useMotionTemplate`blur(${blur}px)`;

    useImperativeHandle(ref, () => targetRef.current as HTMLDivElement);

    const setHeight = useCallback(() => {
      if (!contentRef.current || !targetRef.current) return;

      const height = contentRef.current.clientHeight;
      targetRef.current.style.setProperty('--height', `${height}px`);
      setHeightInitialized(true);
    }, []);

    useLayoutEffect(() => {
      if (!contentRef.current) return;

      const observeElement = contentRef.current;

      const observer = new ResizeObserver(() => setHeight());
      observer.observe(observeElement);

      return () => {
        observer.unobserve(observeElement);
      };
    }, [setHeight]);

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
                className,
                gradient,
                isAlternate,
                isHero,
                padding
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
