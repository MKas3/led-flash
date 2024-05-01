import { Variants } from 'framer-motion';

export const appearingContainer = {
  defaultDuration: 1,
  childDuration: 0.5,
  staggerChildren: 0.5,
};

export const scrollBlurContainer = {
  maxBlur: 15,
  minScale: 0.85,
};

export const slideFromDownVariants: Variants = {
  initial: {
    y: '200%',
  },
  animate: {
    y: '0%',
  },
};
