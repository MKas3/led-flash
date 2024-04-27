'use client';

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const LenisProvider = ({ children }: { children?: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
};
