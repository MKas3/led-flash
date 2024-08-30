'use client';

import React, { useContext, useEffect } from 'react';

import { appearingTextContext } from '@/components/ui/appearing-text/appearing-text';

type AppearingContentTextProps = { children?: React.ReactNode };

export const AppearingContentText = ({
  children
}: AppearingContentTextProps) => {
  const { isAnimating, setHasContentText } = useContext(appearingTextContext);

  useEffect(() => {
    setHasContentText(true);
  }, [setHasContentText]);

  if (isAnimating) return null;

  return <>{children}</>;
};
