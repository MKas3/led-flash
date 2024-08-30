'use client';

import React, { useContext, useMemo } from 'react';

import { constructorContext } from '@/app/(home)/_components/constructor/constructor-provider';
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack
} from '@/components/ui/slider';
import {
  defaultColorLightness,
  defaultColorSaturation
} from '@/config/home/constructor';
import { resourcesHrefs } from '@/config/resources';

import { cn } from '@/lib/utils';

type ConstructorColorSliderProps = React.ComponentPropsWithoutRef<
  typeof SliderRoot
> & {
  isSmart?: boolean;
};

export const ConstructorColorSlider = ({
  className,
  isSmart,
  ...props
}: ConstructorColorSliderProps) => {
  const {
    colorIndex,
    constructorColors,
    constructorSmartColors,
    setConstructorColors,
    setConstructorSmartColors
  } = useContext(constructorContext);

  const handleValueChange = (value: number[]) => {
    if (colorIndex === undefined) return;

    const setColors = isSmart
      ? setConstructorSmartColors
      : setConstructorColors;

    setColors((prevState) =>
      prevState.with(colorIndex, [
        value[0],
        defaultColorSaturation,
        defaultColorLightness
      ])
    );
  };

  const colors = useMemo(
    () => (isSmart ? constructorSmartColors : constructorColors),
    [isSmart, constructorColors, constructorSmartColors]
  );

  return (
    <SliderRoot
      className={cn('aria-disabled:opacity-50', className)}
      disabled={isSmart && colorIndex === undefined ? true : undefined}
      max={360}
      min={0}
      step={1}
      value={[colors[colorIndex ?? 0][0]]}
      onValueChange={handleValueChange}
      {...props}
    >
      <SliderTrack>
        <SliderRange
          className='bg-[length:100%_100%] bg-center'
          style={{
            backgroundImage: `url(${resourcesHrefs.home.colorsSlider})`
          }}
        />
      </SliderTrack>
      <SliderThumb className='border-0 bg-foreground' />
    </SliderRoot>
  );
};
