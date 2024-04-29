import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

type CommentImageProps = React.ComponentPropsWithoutRef<typeof Image>;

export const CommentImage = ({ className, ...props }: CommentImageProps) => {
  return <Image className={cn('rounded-lg', className)} {...props} />;
};
