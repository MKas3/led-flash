'use client';

import React, { useContext } from 'react';
import { HTMLMotionProps, motion, useTransform } from 'framer-motion';

import { cn } from '@/lib/utils';
import { BenefitContext } from '@/app/(home)/_components/benefits/benefit';

type BenefitIconProps = HTMLMotionProps<'span'>;

export const BenefitIcon = ({
  className,
  children,
  ...props
}: BenefitIconProps) => {
  const { realBorderOpacity } = useContext(BenefitContext);
  const color = useTransform(realBorderOpacity, [0, 1], ['#383838', '#DF1DE9']);

  return (
    <>
      <motion.span
        className={cn('relative size-12', className)}
        style={{ color }}
        {...props}
      >
        <>
          {children}
          <motion.span
            className={cn('absolute inset-0 size-12 blur-[10px]', className)}
            style={{ color, opacity: realBorderOpacity }}
            {...props}
          >
            {children}
          </motion.span>
        </>
      </motion.span>
    </>
  );
};
