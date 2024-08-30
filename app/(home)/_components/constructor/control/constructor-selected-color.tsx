'use client';

import React, { useContext } from 'react';

import { constructorContext } from '@/app/(home)/_components/constructor/constructor-provider';

import { cn } from '@/lib/utils';

type ConstructorSelectedColorProps = React.HTMLAttributes<HTMLDivElement> & {
  colors: string[];
};

export const ConstructorSelectedColor = ({
  className,
  colors,
  ...props
}: ConstructorSelectedColorProps) => {
  const { colorIndex } = useContext(constructorContext);

  return (
    <div
      className={cn(
        'flex w-full items-center justify-center rounded-full bg-muted-foreground py-2.5 text-xl text-foreground',
        className
      )}
      {...props}
    >
      {colors[colorIndex ?? 0]}
    </div>
  );
};
