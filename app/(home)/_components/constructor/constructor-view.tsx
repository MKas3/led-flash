import React from 'react';

import { ConstructorCircle } from '@/app/(home)/_components/constructor/view/constructor-circle';
import { ConstructorPlayer } from '@/app/(home)/_components/constructor/view/constructor-player';
import { ConstructorSpin } from '@/app/(home)/_components/constructor/view/constructor-spin';
import { AppearingContainer } from '@/components/ui/appearing-container';

export const ConstructorView = () => {
  return (
    <AppearingContainer
      className='relative flex items-center justify-center overflow-hidden'
      padding='none'
      variant='child'
    >
      <ConstructorPlayer />
      <ConstructorSpin>
        <ConstructorCircle />
      </ConstructorSpin>
    </AppearingContainer>
  );
};
