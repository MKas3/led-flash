import React, { useState } from 'react';

import { FooterForm } from '@/app/_components/footer/footer-form';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';

import { cn } from '@/lib/utils';

type HeaderBurgerCollapsibleProps = React.ComponentPropsWithoutRef<typeof Collapsible>;

export const HeaderBurgerCollapsible = ({ className, ...props }: HeaderBurgerCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible className={cn('group col-span-2', className)} open={isOpen} onOpenChange={setIsOpen} {...props}>
      <div className='flex flex-col items-center justify-center gap-y-6 rounded-sm bg-muted p-6 group-data-[state=open]:hidden'>
        <Heading className='text-center' as='h2'>
          Готовы создать красоту для
          {' '}
          <GradientText>вашего бизнеса?</GradientText>
        </Heading>
        <CollapsibleTrigger asChild>
          <Button variant='gradient'>Оформить заявку</Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent asChild>
        <div className='flex flex-col items-center justify-center gap-y-10 rounded-sm bg-muted p-6'>
          <Heading className='text-center' as='h2'>
            Заказать
            {' '}
            <GradientText>неоновую</GradientText>
            {' '}
            вывеску
          </Heading>
          <FooterForm
            className='w-full grow-0 text-center'
            variant='muted'
            onSubmit={() => setIsOpen(false)}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
