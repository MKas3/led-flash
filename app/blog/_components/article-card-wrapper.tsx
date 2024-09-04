'use client';

import React from 'react';

import { motion } from 'framer-motion';

type ArticleCardWrapperProps = React.ComponentPropsWithoutRef<typeof motion.div>;

export const ArticleCardWrapper = ({ className, ...props }: ArticleCardWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '10%' }}
      transition={{ duration: 0.5, easings: ['easeInOut'] }}
      viewport={{ margin: '-15%', once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      {...props}
    >
    </motion.div>
  );
};
