'use client';

import React, { useContext } from 'react';

import { cn } from '@/lib/utils';
import { ConstructorContext } from '@/app/(home)/_components/constructor/constructor-provider';

type ConstructorSelectedColorProps = React.HTMLAttributes<HTMLDivElement> & {
  colors: string[];
};

export const ConstructorSelectedColor = ({
  colors,
  className,
  ...props
}: ConstructorSelectedColorProps) => {
  const { colorIndex } = useContext(ConstructorContext);

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
