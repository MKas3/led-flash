'use client';

import React, { useContext, useEffect } from 'react';

import { constructorContext } from '@/app/(home)/_components/constructor/constructor-provider';
import { ConstructorTitle } from '@/app/(home)/_components/constructor/control/constructor-title';
import { Label } from '@/components/ui/label';
import {
  RadioGroup,
  RadioGroupItem
} from '@/components/ui/radio-group';
import {
  predefinedColors
} from '@/config/home/constructor';

import { cn, toHSLString } from '@/lib/utils';

type ConstructorPredefinedColorsProps = React.HTMLAttributes<HTMLDivElement>;

export const ConstructorPredefinedColors = ({
  className,
  ...props
}: ConstructorPredefinedColorsProps) => {
  const { colorIndex, setColorIndex } = useContext(constructorContext);

  const handleValueChange = (value: string) => {
    setColorIndex(+value);
  };

  useEffect(() => {
    setColorIndex(0);
  }, [setColorIndex]);

  return (
    <div
      className={cn(`flex w-full flex-col gap-y-3 lg:gap-y-6`, className)}
      {...props}
    >
      <ConstructorTitle>Выберите необходимый цвет для неона:</ConstructorTitle>
      <RadioGroup
        className='grid w-full grid-cols-6 grid-rows-2 justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6'
        value={colorIndex?.toString() ?? ''}
        onValueChange={handleValueChange}
      >
        {predefinedColors.map((item, index) => (
          <Label
            key={index}
            className={cn(
              'relative inline aspect-square h-fit w-full text-foreground'
            )}
          >
            <RadioGroupItem
              className='size-full rounded-[5px] border-transparent outline outline-3 outline-offset-3 outline-transparent focus:outline focus-visible:ring-0 data-[state=checked]:outline-foreground sm:outline-4 sm:outline-offset-4'
              style={{ backgroundColor: toHSLString(item) }}
              value={index.toString()}
              indicatorHidden
            />
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
};
