'use client';

import React from 'react';

import { motion } from 'framer-motion';

type MotionLayoutProps = React.ComponentPropsWithoutRef<typeof motion.div>;

export const MotionLayout = ({ ...props }: MotionLayoutProps) => {
  return <motion.div {...props}></motion.div>;
};
