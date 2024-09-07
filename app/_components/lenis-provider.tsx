'use client';

import React, { useLayoutEffect } from 'react';

import { usePathname } from 'next/navigation';

import { useIsFirstRender } from '@/hooks/use-is-firts-render';
import { ReactLenis, useLenis } from 'lenis/react';

type LenisProviderProps = React.ComponentPropsWithoutRef<typeof ReactLenis>;

const InternalLenisProvider = ({ children }: { children?: React.ReactNode }) => {
  const lenis = useLenis();
  const pathname = usePathname();
  const isFirstRender = useIsFirstRender();

  useLayoutEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true });
  }, [lenis, pathname, isFirstRender]);

  return (
    <>{children}</>
  );
};

const InternalLenisProviderWrapper = ({ options, ...props }: LenisProviderProps) => {
  return (
    <ReactLenis
      options={{ prevent: (node) => {
        if (node.classList.contains('dialog')) {
          return true;
        }
        return false;
      }, ...options }}
      {...props}
    />
  );
};

export const LenisProvider = ({ children, ...props }: LenisProviderProps) => {
  return (
    <InternalLenisProviderWrapper {...props}>
      <InternalLenisProvider>{children}</InternalLenisProvider>
    </InternalLenisProviderWrapper>
  );
};
