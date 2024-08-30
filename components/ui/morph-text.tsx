'use client';

import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type MorphTextProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'children'
> & {
  children: string;
  delay?: number;
  steps?: number;
};

export const MorphText = ({
  className,
  delay = 45,
  steps = 20,
  children,
  ...props
}: MorphTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const prevChildren = useRef('');
  const nextChildren = useRef('');
  const [isFirstAnimation, setIsFirstAnimation] = useState(true);
  const step = useRef(0);

  useEffect(() => {
    if (!children) return;

    const node = ref.current;

    step.current = 0;
    nextChildren.current = children;

    const timer = setInterval(() => {
      if (step.current >= steps - 1) {
        step.current = 0;
        prevChildren.current = nextChildren.current;
        node?.replaceChildren(nextChildren.current);
        setIsFirstAnimation(false);
        clearInterval(timer);
        return;
      }

      const max = Math.max(
        nextChildren.current.length,
        prevChildren.current.length
      );

      const first = (max / steps) * (step.current + 1);
      const second = (max / steps) * (steps - (step.current + 1));

      const firstString = nextChildren.current.substring(0, first);
      const secondString = prevChildren.current.substring(max - second);

      const result = firstString + secondString;

      ref.current?.replaceChildren(result);

      step.current += 1;
    }, delay);

    return () => {
      step.current = 0;
      prevChildren.current = isFirstAnimation ? prevChildren.current : children;
      node?.replaceChildren(
        isFirstAnimation ? prevChildren.current : children
      );
      clearInterval(timer);
    };
  }, [children, ref, steps, isFirstAnimation, delay]);

  return (
    <span ref={ref} className={cn('break-words', className)} {...props}>
      {' '}
    </span>
  );
};
