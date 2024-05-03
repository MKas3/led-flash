'use client';

import React, { createContext, useEffect, useRef, useState } from 'react';

type AppearingTextContext = {
  isAnimating: boolean;
  hasAnimationText: boolean;
  setHasAnimationText: React.Dispatch<React.SetStateAction<boolean>>;
  hasContentText: boolean;
  setHasContentText: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppearingTextContext = createContext<AppearingTextContext>({
  isAnimating: false,
  hasAnimationText: false,
  setHasAnimationText: () => {},
  hasContentText: false,
  setHasContentText: () => {},
});

type AppearingTextProps = { children?: React.ReactNode };

export const AppearingText = ({ children }: AppearingTextProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimationText, setHasAnimationText] = useState(false);
  const [hasContentText, setHasContentText] = useState(false);

  useEffect(() => {
    if (hasAnimationText && hasContentText) setIsAnimating(true);
  }, [hasAnimationText, hasContentText]);

  return (
    <AppearingTextContext.Provider
      value={{
        isAnimating,
        hasAnimationText,
        setHasAnimationText,
        hasContentText,
        setHasContentText,
      }}
    >
      {children}
    </AppearingTextContext.Provider>
  );
};
