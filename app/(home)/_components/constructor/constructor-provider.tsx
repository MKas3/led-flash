'use client';

import React, { createContext, useCallback, useEffect, useState } from 'react';

import {
  defaultColorLightness,
  defaultColorSaturation,
  predefinedColors,
  predefinedSmartColors,
} from '@/config/home/constructor';

export type NeonType = 'colors' | 'rgb' | 'smart';

type ConstructorContext = {
  neonType: NeonType;
  setNeonType: React.Dispatch<React.SetStateAction<NeonType>>;
  speedModifier: number;
  setSpeedModifier: React.Dispatch<React.SetStateAction<number>>;
  colorIndex?: number;
  setColorIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  lastColorIndex: number;
  resetColorIndex: () => void;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  isPausedAnimating: boolean;
  setIsPausedAnimating: React.Dispatch<React.SetStateAction<boolean>>;
  isSpeedModifierAnimating: boolean;
  setIsSpeedModifierAnimating: React.Dispatch<React.SetStateAction<boolean>>;
  constructorColors: [number, number, number][];
  setConstructorColors: React.Dispatch<
    React.SetStateAction<[number, number, number][]>
  >;
  constructorSmartColors: [number, number, number][];
  setConstructorSmartColors: React.Dispatch<
    React.SetStateAction<[number, number, number][]>
  >;
};

export const ConstructorContext = createContext<ConstructorContext>({
  neonType: 'smart',
  setNeonType: () => {},
  speedModifier: 1,
  setSpeedModifier: () => {},
  colorIndex: undefined,
  setColorIndex: () => {},
  lastColorIndex: 0,
  resetColorIndex: () => {},
  isPaused: false,
  setIsPaused: () => {},
  isPausedAnimating: false,
  setIsPausedAnimating: () => {},
  isSpeedModifierAnimating: false,
  setIsSpeedModifierAnimating: () => {},
  constructorColors: predefinedColors,
  setConstructorColors: () => {},
  constructorSmartColors: predefinedSmartColors,
  setConstructorSmartColors: () => {},
});

export const ConstructorProvider = ({
  children,
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
  const [isSpeedModifierAnimating, setIsSpeedModifierAnimating] =
    useState(false);

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
            defaultColorLightness,
          ])
    );
    setIsPausedAnimating(false);
    setIsSpeedModifierAnimating(false);
    setSpeedModifier(1);
    setLastColorIndex(0);
  }, [neonType]);

  return (
    <ConstructorContext.Provider
      value={{
        neonType,
        setNeonType,
        speedModifier,
        setSpeedModifier,
        colorIndex,
        setColorIndex,
        lastColorIndex,
        resetColorIndex,
        isPaused,
        setIsPaused,
        isPausedAnimating,
        setIsPausedAnimating,
        isSpeedModifierAnimating,
        setIsSpeedModifierAnimating,
        constructorColors,
        setConstructorColors,
        constructorSmartColors,
        setConstructorSmartColors,
      }}
    >
      {children}
    </ConstructorContext.Provider>
  );
};
