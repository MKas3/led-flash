import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

type ServiceCardImageProps = React.ComponentPropsWithoutRef<typeof Image>;

export const ServiceCardImage = ({
  className,
  ...props
}: ServiceCardImageProps) => {
  return (
    <div className='flex flex-1 shrink-0 flex-col justify-end'>
      <Image
        className={cn(
          'mt-8 scale-[140%] object-cover sm:scale-125 xl:scale-150',
          className
        )}
        width={555}
        height={417}
        {...props}
      />
    </div>
  );
};
