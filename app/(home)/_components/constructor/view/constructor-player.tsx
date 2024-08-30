'use client';

import React, { useContext } from 'react';

import { constructorContext } from '@/app/(home)/_components/constructor/constructor-provider';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

import { cn } from '@/lib/utils';

type ConstructorPlayerProps = React.ComponentPropsWithoutRef<typeof Button>;

export const ConstructorPlayer = ({
  className,
  ...props
}: ConstructorPlayerProps) => {
  const { isPaused, isPausedAnimating, neonType, setColorIndex, setIsPaused }
    = useContext(constructorContext);

  const handleClick = () => {
    if (isPausedAnimating) return;

    if (isPaused) setColorIndex(undefined);
    setIsPaused(!isPaused);
  };

  return (
    <Button
      className={cn(
        `absolute inset-0 flex items-center justify-center *:size-16 *:fill-white`,
        neonType !== 'smart' && 'hidden',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {isPaused ? <Icon.Play /> : <Icon.Pause />}
      <span className='sr-only'>Play | Pause</span>
    </Button>
  );
};
