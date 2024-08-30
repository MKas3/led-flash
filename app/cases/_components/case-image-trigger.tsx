'use client';

import React from 'react';

import { useCasesMouseFollower } from '@/app/cases/_components/cases-mouse-follower-provider';
import { DialogTrigger } from '@/components/ui/dialog';

import { cn } from '@/lib/utils';

type CaseImageTriggerProps = React.ComponentPropsWithoutRef<typeof DialogTrigger>;

export const CaseImageTrigger = ({ className, ...props }: CaseImageTriggerProps) => {
  const { onClick } = useCasesMouseFollower();

  return <DialogTrigger className={cn('size-full pointer-events-auto', className)} onClick={onClick} {...props} />;
};
