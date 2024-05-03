import React from 'react';
import Image from 'next/image';

import { resourcesHrefs } from '@/config/resources';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { AppearingContainer } from '@/components/ui/appearing-container';
import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';

type FooterTeamProps = React.ComponentPropsWithoutRef<typeof Container>;

export const FooterTeam = ({ className, ...props }: FooterTeamProps) => {
  return (
    <Container
      className={cn(
        'relative bg-background pt-32 before:inset-x-[20%] before:top-[85%] md:before:inset-x-[30%] md:before:top-[80%] lg:before:inset-x-[40%] lg:before:top-[60%] xl:before:inset-x-[20%] xl:before:top-[50%]',
        className
      )}
      gradient='to-right'
      {...props}
    >
      <AppearingContainer
        className='gap-y-3 bg-transparent md:gap-y-5 lg:gap-y-8'
        padding='none'
      >
        <Heading as='h2'>
          Мы <GradientText>команда</GradientText> {siteConfig.altNaming}
        </Heading>
        <span className='text-sm md:text-lg lg:text-xl'>
          Cоздаем невообразимые неоновые вывески для бизнеса, интерьера и
          праздников.
        </span>
        <AppearingContainer
          className='overflow-hidden bg-transparent'
          padding='none'
        >
          <Image
            className='object-cover saturate-0'
            src={resourcesHrefs.home.team}
            alt={`Люди из команды ${siteConfig.naming}`}
            width={1345}
            height={1600}
          />
        </AppearingContainer>
      </AppearingContainer>
    </Container>
  );
};
