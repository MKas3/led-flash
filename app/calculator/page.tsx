import React from 'react';

import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Icon from '@/components/ui/icon';
import { Main } from '@/components/ui/main';
import { CalculatorForm } from '@/app/calculator/_components/calculator-form';
import { CalculatorProvider } from '@/app/calculator/_components/calculator-provider';

export default function CalculatorPage() {
  return (
    <Main>
      <Container className='mb-36 h-screen text-center' isHero>
        <Heading className='mb-12 mt-24' as='h1'>
          Рассчитайте стоимость <GradientText>неоновой вывески</GradientText>
        </Heading>
        <div className='absolute inset-x-0 bottom-24 z-10 flex flex-col items-center justify-center gap-y-3'>
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
