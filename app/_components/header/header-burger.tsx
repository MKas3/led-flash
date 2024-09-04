import React from 'react';

import { HeaderBurgerCollapsible } from '@/app/_components/header/header-burger-collapsible';
import Icon from '@/components/ui/icon';
import Link from '@/components/ui/link';
import {
  Sheet,
  SheetClose,
  SheetInnerContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger
} from '@/components/ui/sheet';

type HeaderBurgerProps = React.ComponentPropsWithoutRef<typeof Sheet>;

export const HeaderBurger = ({ ...props }: HeaderBurgerProps) => {
  return (
    <Sheet {...props}>
      <SheetTrigger className='z-40 block size-[1.875rem] lg:hidden'>
        <Icon.Burger />
        <span className='sr-only'>Header burger button</span>
      </SheetTrigger>
      <SheetPortal>
        <SheetOverlay className='z-20' />
        <SheetInnerContent
          className='z-20 flex max-h-screen flex-col'
          side='top'
        >
          <div className='grid h-fit grid-flow-row grid-cols-2 grid-rows-[repeat(3,68px)_min-content] gap-4'>
            <SheetClose variant='ghost' asChild>
              <Link.Home variant='button' isPathnameSensible />
            </SheetClose>
            <SheetClose variant='ghost' asChild>
              <Link.Cases variant='button' isPathnameSensible />
            </SheetClose>
            <SheetClose variant='ghost' asChild>
              <Link.Delivery variant='button' isPathnameSensible />
            </SheetClose>
            <SheetClose variant='ghost' asChild>
              <Link.Calculator variant='button' isPathnameSensible />
            </SheetClose>
            <SheetClose variant='ghost' asChild>
              <Link.Blog variant='button' isPathnameSensible />
            </SheetClose>
            <SheetClose variant='ghost' asChild>
              <Link.About variant='button' isPathnameSensible />
            </SheetClose>
            <HeaderBurgerCollapsible />
          </div>
          <SheetClose
            className='relative bottom-0 col-span-2 size-full min-h-28 pb-14'
            variant='ghost'
          >
            <SheetClose className='absolute inset-0' />
          </SheetClose>
        </SheetInnerContent>
      </SheetPortal>
    </Sheet>
  );
};
