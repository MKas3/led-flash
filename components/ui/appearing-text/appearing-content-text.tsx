'use client';

import React, { useContext, useEffect } from 'react';

import { AppearingTextContext } from '@/components/ui/appearing-text/appearing-text';

type AppearingContentTextProps = { children?: React.ReactNode };

export const AppearingContentText = ({
  children,
}: AppearingContentTextProps) => {
  const { isAnimating, setHasContentText } = useContext(AppearingTextContext);

  useEffect(() => {
    setHasContentText(true);
  }, [setHasContentText]);

  if (isAnimating) return null;

  return <>{children}</>;
};
