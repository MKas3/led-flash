'use client';

import { forwardRef } from 'react';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

const InnerMotionContainer = motion(Container);

const MotionContainer = forwardRef<
  React.ElementRef<typeof InnerMotionContainer>,
  React.ComponentPropsWithoutRef<typeof InnerMotionContainer>
>(({ ...props }, ref) => {
  return <InnerMotionContainer ref={ref} {...props} />;
});
MotionContainer.displayName = 'MotionWrapper';

export { MotionContainer };
