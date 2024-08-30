'use client';

import React, { useLayoutEffect } from 'react';

import { usePathname } from 'next/navigation';

import { ReactLenis, useLenis } from 'lenis/react';

type LenisProviderProps = React.ComponentPropsWithoutRef<typeof ReactLenis>;

const InternalLenisProvider = ({ children }: { children?: React.ReactNode }) => {
  const lenis = useLenis();
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true });
  }, [lenis, pathname]);

  return (
    <>{children}</>
  );
};

const InternalLenisProviderWrapper = ({ ...props }: LenisProviderProps) => {
  return (
    <ReactLenis {...props} />
  );
};

export const LenisProvider = ({ children, ...props }: LenisProviderProps) => {
  return (
    <InternalLenisProviderWrapper {...props}>
      <InternalLenisProvider>{children}</InternalLenisProvider>
    </InternalLenisProviderWrapper>
  );
};
