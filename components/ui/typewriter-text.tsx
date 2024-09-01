'use client';

import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type TypewriterTextProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'children'
> & {
  as?: 'p' | 'span';
  charCount?: number;
  children?: string;
  delay?: number;
  interval?: number;
  reverseCharCount?: number;
  reverseInterval?: number;
};

export const TypewriterText = ({
  className,
  as,
  charCount = 4,
  delay = 0,
  interval = 10,
  reverseCharCount = 4,
  reverseInterval = 5,
  children,
  ...props
}: TypewriterTextProps) => {
  const Comp = as ?? 'span';

  const [currentText, setCurrentText] = useState('');
  const timer = useRef<NodeJS.Timeout>();
  const currentIndex = useRef(0);

  useEffect(() => {
    if (!children) return;

    const timeout = setTimeout(() => {
      const isReverse = currentIndex.current > 0;

      const startTimer = () => {
        timer.current = setInterval(() => {
          setCurrentText(children?.substring(0, currentIndex.current));

          currentIndex.current += charCount;

          if (currentIndex.current >= children.length + charCount)
            clearInterval(timer.current);
        }, interval);
      };

      if (!isReverse) return startTimer();

      timer.current = setInterval(() => {
        setCurrentText((prevState) =>
          prevState.substring(0, currentIndex.current)
        );

        currentIndex.current -= reverseCharCount;

        if (currentIndex.current <= 0) {
          clearInterval(timer.current);
          startTimer();
        }
      }, reverseInterval);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer.current);
    };
  }, [
    setCurrentText,
    children,
    delay,
    interval,
    charCount,
    reverseInterval,
    reverseCharCount
  ]);

  return (
    <Comp className={cn('break-words', className)} {...props}>
      {currentText}
    </Comp>
  );
};
