import React from 'react';

import { FooterForm } from '@/app/_components/footer/footer-form';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Main } from '@/components/ui/main';

export default function ArticlesLayout({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <Main className='w-auto'>
      <Container className='grid grid-cols-1 gap-y-6 !pt-0 lg:grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)] lg:gap-x-16' isHero>
        {children}
        <Collapsible className='group sticky top-[calc(var(--header-height)+2rem)] col-start-2 hidden h-fit lg:flex'>
          <div className='flex flex-col items-center justify-center gap-y-6 group-data-[state=open]:hidden'>
            <span className='text-center text-2xl font-bold uppercase'>
              Готовы создать красоту для
              {' '}
              <GradientText>вашего бизнеса?</GradientText>
            </span>
            <CollapsibleTrigger asChild>
              <Button size='medium' variant='gradient'>Оформить заявку</Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='flex flex-col items-center justify-center gap-y-6'>
            <span className='text-center text-2xl font-bold uppercase'>
              Заказать
              {' '}
              <GradientText>неоновую</GradientText>
              {' '}
              вывеску
            </span>
            <FooterForm
              className='w-full grow-0 text-center'
              size='sm'
              variant='muted'
            />
          </CollapsibleContent>
        </Collapsible>
      </Container>
    </Main>
  );
}
