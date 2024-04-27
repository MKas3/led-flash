import React from 'react';

import { neonTypes, neonTypesNamings } from '@/config/home/constructor';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ConstructorTitle } from '@/app/(home)/_components/constructor/control/constructor-title';

type ConstructorNeonTypeProps = React.ComponentPropsWithoutRef<typeof TabsList>;

export const ConstructorNeonType = ({
  className,
  ...props
}: ConstructorNeonTypeProps) => {
  return (
    <div className='flex flex-col gap-y-3 lg:gap-y-6'>
      <ConstructorTitle>Выберите тип неона:</ConstructorTitle>
      <TabsList {...props}>
        {neonTypes.map((item, index) => (
          <TabsTrigger className='w-full' key={index} value={item}>
            {neonTypesNamings[index]}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};
