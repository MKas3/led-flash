'use client';

import React, { useContext } from 'react';

import { constructorContext } from '@/app/(home)/_components/constructor/constructor-provider';
import { ConstructorTitle } from '@/app/(home)/_components/constructor/control/constructor-title';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { defaultSpeedModifiers } from '@/config/home/constructor';

import { cn } from '@/lib/utils';

type ConstructorSpeedProps = React.HTMLAttributes<HTMLDivElement>;

export const ConstructorSpeed = ({
  className,
  ...props
}: ConstructorSpeedProps) => {
  const { isSpeedModifierAnimating, setSpeedModifier, speedModifier }
    = useContext(constructorContext);

  const handleValueChange = (value: string) => {
    setSpeedModifier(+value);
  };

  return (
    <div
      className={cn(`flex flex-col gap-y-3 lg:gap-y-6`, className)}
      {...props}
    >
      <ConstructorTitle>Скорость ленты:</ConstructorTitle>
      <Tabs value={speedModifier.toString()} onValueChange={handleValueChange}>
        <TabsList className='w-full' size='sm'>
          {defaultSpeedModifiers.map((item, index) => (
            <TabsTrigger
              key={index}
              aria-controls={undefined}
              disabled={isSpeedModifierAnimating ? true : undefined}
              value={item.toString()}
            >
              {item}
              x
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
