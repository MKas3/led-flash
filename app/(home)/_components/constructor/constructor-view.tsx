import React from 'react';

import { AppearingContainer } from '@/components/ui/appearing-container';
import { ConstructorCircle } from '@/app/(home)/_components/constructor/view/constructor-circle';
import { ConstructorPlayer } from '@/app/(home)/_components/constructor/view/constructor-player';
import { ConstructorSpin } from '@/app/(home)/_components/constructor/view/constructor-spin';

export const ConstructorView = () => {
  return (
    <AppearingContainer
      className='relative flex items-center justify-center overflow-hidden'
      variant='child'
      padding='none'
    >
      <ConstructorPlayer />
      <ConstructorSpin>
        <ConstructorCircle />
      </ConstructorSpin>
    </AppearingContainer>
  );
};
