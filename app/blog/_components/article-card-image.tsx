import React from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils';

type ArticleCardImageProps = React.ComponentPropsWithoutRef<typeof Image>;

export const ArticleCardImage = ({
  className,
  ...props
}: ArticleCardImageProps) => {
  return (
    <Image
      className={cn('size-full object-cover', className)}
      height={220}
      width={392}
      {...props}
    />
  );
};
