import React from 'react';

import { ConstructorCircle } from '@/app/(home)/_components/constructor/view/constructor-circle';
import { ConstructorPlayer } from '@/app/(home)/_components/constructor/view/constructor-player';
import { ConstructorSpin } from '@/app/(home)/_components/constructor/view/constructor-spin';

export const ConstructorView = () => {
  return (
    <div className='relative flex items-center justify-center overflow-hidden'>
      <ConstructorPlayer />
      <ConstructorSpin>
        <ConstructorCircle />
      </ConstructorSpin>
    </div>
  );
};
