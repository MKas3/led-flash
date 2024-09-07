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
  motion,
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
      offset: ['end end', 'end start'],
      target: targetRef,
      ...scrollOptions
    });

    const translateY = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, 250]);
    const scale = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1, scrollBlurContainer.minScale]);

    const transform = useMotionTemplate`matrix(${scale}, 0, 0, ${scale}, 0, ${translateY})`;

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
              'origin-bottom',
              containerVariants({
                className,
                gradient,
                isAlternate,
                isHero,
                padding
              })
            )}
            style={{ transform }}
            {...props}
          />
        </div>
      </div>
    );
  }
);
ScrollBlurContainer.displayName = 'ScrollBlurContainer';

export { ScrollBlurContainer };
