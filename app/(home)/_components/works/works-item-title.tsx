import React from 'react';

import { Heading } from '@/components/ui/heading';

import { cn } from '@/lib/utils';

type WorksItemHeadingProps = React.ComponentPropsWithoutRef<typeof Heading>;

export const WorksItemTitle = ({
  className,
  ...props
}: WorksItemHeadingProps) => {
  return (
    <div
      className={cn(
        `flex w-full flex-col gap-y-2 md:w-2/3 md:gap-y-4`,
        className
      )}
    >
      <span className='text-xs font-medium md:text-base'>
        Кейс
      </span>
      <Heading className='uppercase' as='h3' {...props} />
    </div>
  );
};
