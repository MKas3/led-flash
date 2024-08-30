'use client';

import React, { useEffect } from 'react';

import { useCasesMouseFollower } from '@/app/cases/_components/cases-mouse-follower-provider';
import { useCarousel } from '@/components/ui/carousel';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type CaseMouseFollowerHandlerProps = React.ComponentPropsWithoutRef<typeof motion.div>;

export const CaseMouseFollowerHandler = ({ className, ...props }: CaseMouseFollowerHandlerProps) => {
  const { api } = useCarousel();
  const { setActiveCase, onMouseMove } = useCasesMouseFollower();

  useEffect(() => {
    return () => {
      setActiveCase();
    };
  }, [setActiveCase]);

  return (
    <motion.div
      className={cn(
        `pointer-events-auto`,
        className
      )}
      onHoverEnd={() => setActiveCase()}
      onHoverStart={() => setActiveCase(api)}
      onMouseMove={onMouseMove}
      {...props}
    />
  );
};
