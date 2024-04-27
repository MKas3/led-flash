'use client';

import React, { useContext, useMemo } from 'react';

import {
  defaultColorLightness,
  defaultColorSaturation,
} from '@/config/home/constructor';
import { resourcesHrefs } from '@/config/resources';
import { cn } from '@/lib/utils';
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from '@/components/ui/slider';
import { ConstructorContext } from '@/app/(home)/_components/constructor/constructor-provider';

type ConstructorColorSliderProps = React.ComponentPropsWithoutRef<
  typeof SliderRoot
> & {
  isSmart?: boolean;
};

export const ConstructorColorSlider = ({
  isSmart,
  className,
  ...props
}: ConstructorColorSliderProps) => {
  const {
    colorIndex,
    constructorColors,
    setConstructorColors,
    constructorSmartColors,
    setConstructorSmartColors,
  } = useContext(ConstructorContext);

  const handleValueChange = (value: number[]) => {
    if (colorIndex === undefined) return;

    const setColors = isSmart
      ? setConstructorSmartColors
      : setConstructorColors;

    setColors((prevState) =>
      prevState.with(colorIndex, [
        value[0],
        defaultColorSaturation,
        defaultColorLightness,
      ])
    );
  };

  const colors = useMemo(
    () => (isSmart ? constructorSmartColors : constructorColors),
    [isSmart, constructorColors, constructorSmartColors]
  );

  return (
    <SliderRoot
      min={0}
      max={360}
      step={1}
      value={[colors[colorIndex ?? 0][0]]}
      onValueChange={handleValueChange}
      className={cn('aria-disabled:opacity-50', className)}
      disabled={isSmart && colorIndex === undefined ? true : undefined}
      {...props}
    >
      <SliderTrack>
        <SliderRange
          className='bg-[length:100%_100%] bg-center'
          style={{
            backgroundImage: `url(${resourcesHrefs.home.colorsSlider})`,
          }}
        />
      </SliderTrack>
      <SliderThumb className='border-0 bg-foreground' />
    </SliderRoot>
  );
};
