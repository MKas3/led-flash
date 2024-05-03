import React from 'react';
import { Metadata } from 'next';

import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Icon from '@/components/ui/icon';
import { Main } from '@/components/ui/main';
import { CalculatorForm } from '@/app/calculator/_components/calculator-form';
import { CalculatorProvider } from '@/app/calculator/_components/calculator-provider';

export const metadata: Metadata = {
  title: 'Калькулятор',
};

export default function CalculatorPage() {
  return (
    <Main>
      <Container
        className='mb-0 flex flex-col gap-y-20 text-center md:mb-20 lg:mb-24 xl:mb-36'
        isHero
      >
        <Heading className='mt-24' as='h1'>
          Рассчитайте стоимость <GradientText>неоновой вывески</GradientText>
        </Heading>
        <div className='hidden flex-col items-center justify-center gap-y-3 opacity-100 delay-2000 duration-1000 animate-in fade-in-0 fill-mode-both md:flex'>
          <Icon.MouseScroll className='h-10 w-7' />
          <span className='font-poppins text-sm font-semibold'>Scroll</span>
        </div>
      </Container>
      <Container>
        <Heading className='sr-only' as='h2'>
          Калькулятор
        </Heading>
        <CalculatorProvider>
          <CalculatorForm />
        </CalculatorProvider>
      </Container>
    </Main>
  );
}
