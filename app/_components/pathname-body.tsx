'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type PathnameBodyProps = React.ComponentPropsWithoutRef<'body'>;

export const PathnameBody = ({ className, ...props }: PathnameBodyProps) => {
  const pathname = usePathname();

  return <body className={cn(pathname === '/' ? 'bg-foreground' : 'bg-background', className)} {...props}></body>;
};
