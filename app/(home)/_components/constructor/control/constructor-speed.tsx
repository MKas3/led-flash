'use client';

import React, { useContext } from 'react';

import { defaultSpeedModifiers } from '@/config/home/constructor';
import { cn } from '@/lib/utils';
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
        <TabsList className='w-full' size='sm'>
          {defaultSpeedModifiers.map((item, index) => (
            <TabsTrigger
              key={index}
              disabled={isSpeedModifierAnimating ? true : undefined}
              value={item.toString()}
              aria-controls={undefined}
            >
              {item}x
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
