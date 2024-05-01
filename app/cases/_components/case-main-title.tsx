import React from 'react';

import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/heading';

type CaseMainTitleProps = React.HTMLAttributes<HTMLDivElement>;

export const CaseMainTitle = ({ className, ...props }: CaseMainTitleProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-y-2 lg:gap-y-3 xl:gap-y-4',
        className
      )}
    >
      <span className='text-xs font-medium'>Кейс</span>
      <Heading
        className='text-base font-medium uppercase md:text-sm lg:text-sm xl:text-lg 2xl:text-xl'
        as='h3'
        {...props}
      />
    </div>
  );
};
