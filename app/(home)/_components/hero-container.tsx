import React from 'react';

import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { HeroContainerLine } from '@/app/(home)/_components/hero-container-line';

type HeroContainerProps = React.ComponentPropsWithoutRef<typeof Container>;

export const HeroContainer = ({
  className,
  children,
  ...props
}: HeroContainerProps) => {
  return (
    <Container padding='none' {...props}>
      <HeroContainerLine />
      <div
        className={cn(
          'mb-36 flex h-[90vh] flex-col justify-end gap-y-8 px-container-sm pb-28 pt-[var(--header-full-height-sm)] md:h-auto md:justify-start md:gap-y-16 md:px-container-md md:pb-64 md:pt-[var(--header-full-height)] lg:px-container-lg xl:px-container 3xl:mx-auto 3xl:px-0',
          className
        )}
      >
        {children}
      </div>
    </Container>
  );
};
