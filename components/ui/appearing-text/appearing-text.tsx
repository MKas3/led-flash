'use client';

import React, { createContext, useEffect, useMemo, useState } from 'react';

type AppearingTextContext = {
  isAnimating: boolean;
  hasAnimationText: boolean;
  hasContentText: boolean;
  setHasAnimationText: React.Dispatch<React.SetStateAction<boolean>>;
  setHasContentText: React.Dispatch<React.SetStateAction<boolean>>;
};

export const appearingTextContext = createContext<AppearingTextContext>({
  hasAnimationText: false,
  hasContentText: false,
  isAnimating: false,
  setHasAnimationText: () => {},
  setHasContentText: () => {}
});

type AppearingTextProps = { children?: React.ReactNode };

export const AppearingText = ({ children }: AppearingTextProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimationText, setHasAnimationText] = useState(false);
  const [hasContentText, setHasContentText] = useState(false);

  useEffect(() => {
    if (hasAnimationText && hasContentText) setIsAnimating(true);
  }, [hasAnimationText, hasContentText]);

  const contextValue = useMemo(() => ({
    hasAnimationText,
    hasContentText,
    isAnimating,
    setHasAnimationText,
    setHasContentText
  }), [hasAnimationText, hasContentText, isAnimating]);

  return (
    <appearingTextContext.Provider
      value={contextValue}
    >
      {children}
    </appearingTextContext.Provider>
  );
};
