'use client';

import React, { useContext } from 'react';

import { constructorContext } from '@/app/(home)/_components/constructor/constructor-provider';
import { ConstructorTitle } from '@/app/(home)/_components/constructor/control/constructor-title';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { predefinedSmartColors } from '@/config/home/constructor';

import { cn, toHSLString } from '@/lib/utils';

type ConstructorColorsProps = React.HTMLAttributes<HTMLDivElement>;

export const ConstructorColors = ({
  className,
  ...props
}: ConstructorColorsProps) => {
  const { colorIndex, constructorSmartColors, setColorIndex }
    = useContext(constructorContext);

  const backgroundColors = constructorSmartColors.map((item) =>
    toHSLString(item)
  );

  const handleValueChange = (value: string) => {
    setColorIndex(+value);
  };

  return (
    <div className={cn('flex flex-col gap-y-6', className)} {...props}>
      <ConstructorTitle>Программируйте ленту как вам нужно:</ConstructorTitle>
      <RadioGroup
        className='flex justify-between'
        value={colorIndex?.toString() ?? ''}
        onValueChange={handleValueChange}
      >
        {predefinedSmartColors.map((_, index) => (
          <Label
            key={index}
            className={cn(
              `relative inline aspect-square size-8 text-foreground lg:size-10 md:size-14 sm:size-12 xl:size-12`
            )}
          >
            <span
              className='absolute inset-0 flex items-center justify-center text-sm sm:text-lg md:text-xl 2xl:text-2xl'
              id={`smart-color-${index}`}
            >
              {index + 1}
            </span>
            <RadioGroupItem
              className='aspect-square size-full border-transparent outline outline-3 outline-offset-3 outline-transparent focus:outline focus-visible:ring-0 data-[state=checked]:outline-foreground sm:outline-4 sm:outline-offset-4'
              aria-labelledby={`smart-color-${index}`}
              style={{ backgroundColor: backgroundColors[index] }}
              value={index.toString()}
              indicatorHidden
            />
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
};
