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
    y: '300%',
  },
  animate: {
    y: '0%',
  },
};

export const splashAnimation = {
  stepInterval: 100,
  step: {
    default: 8,
    first: 6,
  },
  wordsStagger: {
    default: 0.25,
    first: 0.5,
  },
  from: {
    opacity: 90,
    nonInteractive: 100,
    renderChildren: 140,
    end: 200,
  },
};
