'use client';

import React from 'react';

import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';

import { cn } from '@/lib/utils';

type CasesRightProps = React.ComponentPropsWithoutRef<typeof motion.div>;

export const CasesRight = ({ className, ...props }: CasesRightProps) => {
  const { scrollYProgress } = useScroll({ offset: ['start start', 'end end'] });
  const normalizedTranslateY = useTransform(scrollYProgress, [0, 1], [10, -100]);
  const translateY = useMotionTemplate`${normalizedTranslateY}%`;

  return <motion.div className={cn('flex flex-col gap-y-20 max-md:!transform-none', className)} style={{ translateY }} {...props} />;
};
