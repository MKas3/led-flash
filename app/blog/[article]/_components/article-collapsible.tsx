'use client';

import React, { useState } from 'react';

import { FooterForm } from '@/app/_components/footer/footer-form';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { GradientText } from '@/components/ui/gradient-text';

import { cn } from '@/lib/utils';

type ArticleCollapsibleProps = React.ComponentPropsWithoutRef<typeof Collapsible>;

export const ArticleCollapsible = ({ className, ...props }: ArticleCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible className={cn('group sticky top-[calc(var(--header-height)+2rem)] col-start-2 hidden h-fit lg:flex', className)} open={isOpen} onOpenChange={setIsOpen} {...props}>
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
          onSubmit={() => setIsOpen(false)}
        />
      </CollapsibleContent>
    </Collapsible>
  );
};
