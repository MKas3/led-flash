'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useDevice } from '@/hooks/use-device';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type CaseProps = React.ComponentPropsWithoutRef<'div'>;

export const Case = ({ className, ...props }: CaseProps) => {
  const device = useDevice();
  const caseRef = useRef<HTMLDivElement>(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    if (device !== 'xs' && device !== 'sm') return;

    const caseElement = caseRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCentered(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '-17.5%',
        threshold: [0.1, 0.5, 0.9]
      }
    );

    if (caseElement) {
      observer.observe(caseElement);
    }

    return () => {
      if (caseElement) {
        observer.unobserve(caseElement);
      }
    };
  }, [device]);

  return (
    <motion.div
      initial={{ opacity: 0, y: '10%' }}
      transition={{ duration: 0.5, easings: ['easeInOut'] }}
      viewport={{ margin: '-15%', once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div
        ref={caseRef}
        className={cn(
          'case group/case flex w-full md:group-has-[.case:hover]:opacity-60 md:hover:!opacity-100 transition-all md:hover:scale-105 duration-500 flex-col gap-y-4',
          device !== 'xs' && device !== 'sm' ? '' : isCentered ? 'opacity-100 scale-105' : 'opacity-60',
          className
        )}
        {...props}
      />
    </motion.div>
  );
};
