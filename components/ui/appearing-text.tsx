'use client';

import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type AppearingTextProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'children'
> & {
  charCount?: number;
  interval?: number;
  delay?: number;
  children?: string;
};

export const AppearingText = ({
  charCount = 4,
  interval = 10,
  delay = 0,
  children,
  className,
  ...props
}: AppearingTextProps) => {
  const [currentText, setCurrentText] = useState('');
  const timer = useRef<NodeJS.Timeout>();
  const currentIndex = useRef(0);

  useEffect(() => {
    if (!children) return;

    const timeout = setTimeout(() => {
      timer.current = setInterval(() => {
        setCurrentText(children?.substring(0, currentIndex.current));

        currentIndex.current += charCount;

        if (currentIndex.current >= children.length + charCount)
          clearInterval(timer.current);
      }, interval);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer.current);
    };
  }, [setCurrentText, children, delay, interval, charCount]);

  return (
    <span className={cn('break-words', className)} {...props}>
      {currentText}
    </span>
  );
};
