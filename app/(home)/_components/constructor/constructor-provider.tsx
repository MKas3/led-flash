'use client';

import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import {
  defaultColorLightness,
  defaultColorSaturation,
  predefinedColors,
  predefinedSmartColors
} from '@/config/home/constructor';

export type NeonType = 'colors' | 'rgb' | 'smart';

type ConstructorContext = {
  isPaused: boolean;
  isPausedAnimating: boolean;
  isSpeedModifierAnimating: boolean;
  constructorColors: [number, number, number][];
  constructorSmartColors: [number, number, number][];
  lastColorIndex: number;
  neonType: NeonType;
  resetColorIndex: () => void;
  setColorIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  setConstructorColors: React.Dispatch<
    React.SetStateAction<[number, number, number][]>
  >;
  setConstructorSmartColors: React.Dispatch<
    React.SetStateAction<[number, number, number][]>
  >;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPausedAnimating: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSpeedModifierAnimating: React.Dispatch<React.SetStateAction<boolean>>;
  setNeonType: React.Dispatch<React.SetStateAction<NeonType>>;
  setSpeedModifier: React.Dispatch<React.SetStateAction<number>>;
  speedModifier: number;
  colorIndex?: number;
};

export const constructorContext = createContext<ConstructorContext>({
  colorIndex: undefined,
  constructorColors: predefinedColors,
  constructorSmartColors: predefinedSmartColors,
  isPaused: false,
  isPausedAnimating: false,
  isSpeedModifierAnimating: false,
  lastColorIndex: 0,
  neonType: 'smart',
  resetColorIndex: () => {},
  setColorIndex: () => {},
  setConstructorColors: () => {},
  setConstructorSmartColors: () => {},
  setIsPaused: () => {},
  setIsPausedAnimating: () => {},
  setIsSpeedModifierAnimating: () => {},
  setNeonType: () => {},
  setSpeedModifier: () => {},
  speedModifier: 1
});

export const ConstructorProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [neonType, setNeonType] = useState<NeonType>('smart');
  const [speedModifier, setSpeedModifier] = useState(1);
  const [constructorSmartColors, setConstructorSmartColors] = useState(
    predefinedSmartColors
  );
  const [constructorColors, setConstructorColors] = useState(predefinedColors);
  const [colorIndex, setColorIndex] = useState<number | undefined>();
  const [isPaused, setIsPaused] = useState(false);
  const [isPausedAnimating, setIsPausedAnimating] = useState(false);
  const [isSpeedModifierAnimating, setIsSpeedModifierAnimating]
    = useState(false);

  const [lastColorIndex, setLastColorIndex] = useState<number>(0);

  const resetColorIndex = useCallback(() => {
    setColorIndex(lastColorIndex);
  }, [setColorIndex, lastColorIndex]);

  useEffect(() => {
    if (colorIndex !== undefined) {
      setLastColorIndex(colorIndex);
      setIsPaused(neonType === 'smart');
    }
  }, [colorIndex, neonType]);

  useEffect(() => {
    if (isPaused) {
      setColorIndex(lastColorIndex);
    }
  }, [isPaused, lastColorIndex]);

  useEffect(() => {
    setIsPaused(false);
    setColorIndex(neonType === 'rgb' ? 0 : undefined);
    setConstructorColors(
      neonType === 'colors'
        ? predefinedColors
        : predefinedColors.with(0, [
          0,
          defaultColorSaturation,
          defaultColorLightness
        ])
    );
    setIsPausedAnimating(false);
    setIsSpeedModifierAnimating(false);
    setSpeedModifier(1);
    setLastColorIndex(0);
  }, [neonType]);

  const contextValue = useMemo(() => ({
    colorIndex,
    constructorColors,
    constructorSmartColors,
    isPaused,
    isPausedAnimating,
    isSpeedModifierAnimating,
    lastColorIndex,
    neonType,
    resetColorIndex,
    setColorIndex,
    setConstructorColors,
    setConstructorSmartColors,
    setIsPaused,
    setIsPausedAnimating,
    setIsSpeedModifierAnimating,
    setNeonType,
    setSpeedModifier,
    speedModifier
  }), [
    colorIndex,
    constructorColors,
    constructorSmartColors,
    isPaused,
    isPausedAnimating,
    isSpeedModifierAnimating,
    lastColorIndex,
    neonType,
    resetColorIndex,
    speedModifier
  ]);

  return (
    <constructorContext.Provider
      value={contextValue}
    >
      {children}
    </constructorContext.Provider>
  );
};
