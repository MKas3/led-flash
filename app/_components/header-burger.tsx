import React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { Heading2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Icon from '@/components/ui/icon';
import Link from '@/components/ui/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetInnerContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FooterForm } from '@/app/_components/footer-form';

type HeaderBurgerProps = React.ComponentPropsWithoutRef<typeof Sheet>;

export const HeaderBurger = ({ ...props }: HeaderBurgerProps) => {
  return (
    <Sheet {...props}>
      <SheetTrigger className='z-50 block size-[1.875rem] lg:hidden'>
        <Icon.Burger />
      </SheetTrigger>
      <SheetPortal>
        <SheetOverlay />
        <SheetInnerContent
          side='top'
          className='grid grid-flow-row grid-cols-2 grid-rows-[repeat(3,68px)] has-[div[data-state=closed]]:overflow-y-hidden'
        >
          <Link.Home variant='button' isPathnameSensible />
          <Link.Cases variant='button' isPathnameSensible />
          <Link.Delivery variant='button' isPathnameSensible />
          <Link.Calculator variant='button' isPathnameSensible />
          <Link.Blog variant='button' isPathnameSensible />
          <Link.About variant='button' isPathnameSensible />
          <Collapsible className='group col-span-2'>
            <div className='flex flex-col items-center justify-center gap-y-6 rounded-sm bg-muted p-6 group-data-[state=open]:hidden'>
              <Heading className='text-center' as='h2'>
                Готовы создать красоту для{' '}
                <GradientText>вашего бизнеса?</GradientText>
              </Heading>
              <CollapsibleTrigger asChild>
                <Button variant='gradient'>Оформить заявку</Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent asChild>
              <div className='flex flex-col items-center justify-center gap-y-10 rounded-sm bg-muted p-6'>
                <Heading className='text-center' as='h2'>
                  Заказать <GradientText>неоновую</GradientText> вывеску
                </Heading>
                <FooterForm className='text-center [&_input]:bg-muted-foreground' />
              </div>
            </CollapsibleContent>
          </Collapsible>
          <SheetClose className='relative bottom-0 col-span-2 mt-auto' />
        </SheetInnerContent>
      </SheetPortal>
    </Sheet>
  );
};
