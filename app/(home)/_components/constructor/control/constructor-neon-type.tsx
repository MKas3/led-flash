import React from 'react';

import { ConstructorTitle } from '@/app/(home)/_components/constructor/control/constructor-title';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { neonTypes, neonTypesNamings } from '@/config/home/constructor';

type ConstructorNeonTypeProps = React.ComponentPropsWithoutRef<typeof TabsList>;

export const ConstructorNeonType = ({
  className,
  ...props
}: ConstructorNeonTypeProps) => {
  return (
    <div className='flex flex-col gap-y-3 lg:gap-y-6'>
      <ConstructorTitle>Выберите тип неона:</ConstructorTitle>
      <TabsList className='w-full' {...props}>
        {neonTypes.map((item, index) => (
          <TabsTrigger key={index} className='w-full' value={item}>
            {neonTypesNamings[index]}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};
