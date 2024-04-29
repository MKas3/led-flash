'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { Container } from '@/components/ui/container';

const InnerMotionContainer = motion(Container);

const MotionContainer = forwardRef<
  React.ElementRef<typeof InnerMotionContainer>,
  React.ComponentPropsWithoutRef<typeof InnerMotionContainer>
>(({ ...props }, ref) => {
  return <InnerMotionContainer ref={ref} {...props} />;
});
MotionContainer.displayName = 'MotionWrapper';

export { MotionContainer };
