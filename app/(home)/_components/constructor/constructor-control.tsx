'use client';

import type {
  NeonType
} from '@/app/(home)/_components/constructor/constructor-provider';

import React, { useContext } from 'react';

import {
  constructorContext
} from '@/app/(home)/_components/constructor/constructor-provider';
import { ConstructorColorSlider } from '@/app/(home)/_components/constructor/control/constructor-color-slider';
import { ConstructorColors } from '@/app/(home)/_components/constructor/control/constructor-colors';
import { ConstructorNeonType } from '@/app/(home)/_components/constructor/control/constructor-neon-type';
import { ConstructorPredefinedColors } from '@/app/(home)/_components/constructor/control/constructor-predefined-colors';
import { ConstructorSelectedColor } from '@/app/(home)/_components/constructor/control/constructor-selected-color';
import { ConstructorSpeed } from '@/app/(home)/_components/constructor/control/constructor-speed';
import { ConstructorTitle } from '@/app/(home)/_components/constructor/control/constructor-title';
import { AppearingContainer } from '@/components/ui/appearing-container';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { predefinedColorsNamings } from '@/config/home/constructor';

import { cn } from '@/lib/utils';

type ConstructorControlProps = React.ComponentPropsWithoutRef<typeof Tabs>;

export const ConstructorControl = ({
  className,
  ...props
}: ConstructorControlProps) => {
  const { neonType, setNeonType } = useContext(constructorContext);

  const handleValueChange = (value: string) => {
    setNeonType(value as NeonType);
  };

  return (
    <AppearingContainer padding='none' variant='child'>
      <Tabs
        className={cn(
          `size-fit w-full space-y-5 rounded-3xl bg-muted p-6 2xl:justify-self-end md:my-8 md:space-y-10 sm:p-9`,
          className
        )}
        value={neonType}
        onValueChange={handleValueChange}
        {...props}
      >
        <ConstructorNeonType />
        <TabsContent
          className='flex flex-col gap-y-6 lg:gap-y-3'
          value='colors'
        >
          <ConstructorPredefinedColors />
          <ConstructorSelectedColor colors={predefinedColorsNamings} />
        </TabsContent>
        <TabsContent
          className='flex flex-col gap-y-6 lg:gap-y-3'
          value='rgb'
        >
          <ConstructorTitle>
            Передвигайте ползунок для выбора цвета:
          </ConstructorTitle>
          <ConstructorColorSlider />
        </TabsContent>
        <TabsContent
          className='flex flex-col gap-y-10 lg:gap-y-5'
          value='smart'
        >
          <div className='flex flex-col gap-y-5 lg:gap-y-7'>
            <ConstructorColors />
            <ConstructorColorSlider isSmart />
          </div>
          <ConstructorSpeed />
        </TabsContent>
      </Tabs>
    </AppearingContainer>
  );
};
