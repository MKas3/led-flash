'use client';

import React, { useEffect } from 'react';

import { useCasesMouseFollower } from '@/app/cases/_components/cases-mouse-follower-provider';
import { useCarousel } from '@/components/ui/carousel';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type CaseMouseFollowerHandlerProps = React.ComponentPropsWithoutRef<typeof motion.div>;

export const CaseMouseFollowerHandler = ({ className, ...props }: CaseMouseFollowerHandlerProps) => {
  const { api } = useCarousel();
  const { disable, setActiveCase, onMouseMove } = useCasesMouseFollower();

  useEffect(() => {
    if (disable) return;

    return () => {
      setActiveCase();
    };
  }, [disable, setActiveCase]);

  const onHoverStart = () => {
    if (disable) return;

    setActiveCase(api);
  };

  const onHoverEnd = () => {
    if (disable) return;

    setActiveCase();
  };

  return (
    <motion.div
      className={cn(
        `pointer-events-auto`,
        className
      )}
      onHoverEnd={onHoverEnd}
      onHoverStart={onHoverStart}
      onMouseMove={onMouseMove}
      {...props}
    />
  );
};
