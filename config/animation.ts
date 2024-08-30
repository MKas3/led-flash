import type { Variants } from 'framer-motion';

export const appearingContainer = {
  childDuration: 0.5,
  defaultDuration: 1,
  staggerChildren: 0.5
};

export const scrollBlurContainer = {
  maxBlur: 15,
  minScale: 0.85
};

export const slideFromDownVariants: Variants = {
  animate: {
    y: '0%'
  },
  initial: {
    y: '300%'
  }
};

export const splashAnimation = {
  from: {
    end: 160,
    nonInteractive: 100,
    opacity: 90,
    renderChildren: 140
  },
  step: {
    default: 8,
    first: 6
  },
  stepInterval: 100,
  wordsStagger: {
    default: 0.25,
    first: 0.5
  }
};
