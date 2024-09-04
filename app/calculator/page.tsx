import type { Metadata } from 'next';

import React from 'react';

import { CalculatorForm } from '@/app/calculator/_components/calculator-form';
import { CalculatorProvider } from '@/app/calculator/_components/calculator-provider';
import { AnchorLink } from '@/components/ui/anchor-link';
import { AppearingContainer } from '@/components/ui/appearing-container';
import { AppearingAnimationText } from '@/components/ui/appearing-text/appearing-animation-text';
import { AppearingAnimationTextPart } from '@/components/ui/appearing-text/appearing-animation-text-part';
import { AppearingContentText } from '@/components/ui/appearing-text/appearing-content-text';
import { AppearingText } from '@/components/ui/appearing-text/appearing-text';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Icon from '@/components/ui/icon';
import { Main } from '@/components/ui/main';

export const metadata: Metadata = {
  title: 'Калькулятор'
};

export default function CalculatorPage() {
  return (
    <Main>
      <AppearingContainer
        className='mb-0 flex flex-col gap-y-20 text-center md:mb-20 lg:mb-24 xl:mb-36'
        isHero
      >
        <Heading className='mt-24' as='h1'>
          <AppearingText>
            <AppearingAnimationText>
              <AppearingAnimationTextPart>
                Рассчитайте
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                стоимость
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                <GradientText className='to-[200%]'>неоновой</GradientText>
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                <GradientText className='from-[-100%]'>вывески</GradientText>
              </AppearingAnimationTextPart>
            </AppearingAnimationText>
            <AppearingContentText>
              Рассчитайте стоимость
              <GradientText>неоновой вывески</GradientText>
            </AppearingContentText>
          </AppearingText>
        </Heading>
        <AnchorLink className='mx-auto hidden w-fit flex-col items-center justify-center gap-y-3 opacity-100 delay-500 duration-1000 animate-in fade-in-0 fill-mode-both md:flex' href={600}>
          <Icon.MouseScroll className='h-10 w-7' />
          <span className='font-poppins text-sm font-semibold'>Scroll</span>
        </AnchorLink>
      </AppearingContainer>
      <AppearingContainer>
        <Heading className='sr-only' as='h2'>
          Калькулятор
        </Heading>
        <CalculatorProvider>
          <CalculatorForm />
        </CalculatorProvider>
      </AppearingContainer>
    </Main>
  );
}
