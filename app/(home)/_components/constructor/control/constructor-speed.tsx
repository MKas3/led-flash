'use client';

import React, { useContext } from 'react';
import { useSpring } from 'framer-motion';

import {
  defaultSpeedModifiers,
  predefinedSmartColors,
} from '@/config/home/constructor';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ConstructorContext } from '@/app/(home)/_components/constructor/constructor-provider';
import { ConstructorTitle } from '@/app/(home)/_components/constructor/control/constructor-title';

type ConstructorSpeedProps = React.HTMLAttributes<HTMLDivElement>;

export const ConstructorSpeed = ({
  className,
  ...props
}: ConstructorSpeedProps) => {
  const { speedModifier, setSpeedModifier, isSpeedModifierAnimating } =
    useContext(ConstructorContext);

  const handleValueChange = (value: string) => {
    setSpeedModifier(+value);
  };

  return (
    <div
      className={cn('flex flex-col gap-y-3 lg:gap-y-6', className)}
      {...props}
    >
      <ConstructorTitle>Скорость ленты:</ConstructorTitle>
      <Tabs value={speedModifier.toString()} onValueChange={handleValueChange}>
        <TabsList>
          {defaultSpeedModifiers.map((item, index) => (
            <TabsTrigger
              key={index}
              className='px-2.5 lg:text-xs xl:px-3 xl:text-base 2xl:px-4'
              disabled={isSpeedModifierAnimating ? true : undefined}
              value={item.toString()}
            >
              {item}x
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
