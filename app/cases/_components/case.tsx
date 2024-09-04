'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type CaseProps = React.ComponentPropsWithoutRef<'div'>;

export const Case = ({ className, ...props }: CaseProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: '10%' }} transition={{ duration: 0.5, easings: ['easeInOut'] }} viewport={{ margin: '-15%', once: true }} whileInView={{ opacity: 1, y: 0 }}>
      <div
        className={cn('case group/case flex w-full group-has-[.case:hover]:opacity-60 hover:!opacity-100 transition-all hover:scale-105 duration-500 flex-col gap-y-4', className)}
        {...props}
      />
    </motion.div>
  );
};
