import React from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils';

type WorksItemImageProps = React.ComponentPropsWithoutRef<typeof Image>;

export const WorksItemImage = ({
  className,
  ...props
}: WorksItemImageProps) => {
  return (
    <Image
      className={cn(
        `aspect-[3/4] size-full rounded-xl lg:rounded-3xl md:rounded-2xl`,
        className
      )}
      height={760}
      width={406}
      {...props}
    />
  );
};
