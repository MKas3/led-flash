import React from 'react';

import { ConstructorControl } from '@/app/(home)/_components/constructor/constructor-control';
import { ConstructorProvider } from '@/app/(home)/_components/constructor/constructor-provider';
import { ConstructorView } from '@/app/(home)/_components/constructor/constructor-view';
import { ConstructorWrapper } from '@/app/(home)/_components/constructor/constructor-wrapper';

type ConstructorProps = React.ComponentPropsWithoutRef<
  typeof ConstructorWrapper
>;

export const Constructor = ({ ...props }: ConstructorProps) => {
  return (
    <ConstructorProvider>
      <ConstructorWrapper {...props}>
        <ConstructorView />
        <ConstructorControl />
      </ConstructorWrapper>
    </ConstructorProvider>
  );
};
