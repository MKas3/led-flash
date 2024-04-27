import React from 'react';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';
import Link from '@/components/ui/link';
import { HeaderBurger } from '@/app/_components/header-burger';

type HeaderProps = React.HTMLAttributes<HTMLElement>;

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        'pointer-events-auto fixed inset-x-0 top-header-top-sm z-50 flex h-header max-w-[100vw] items-center justify-between gap-x-10 rounded-sm px-container-sm before:absolute before:inset-0 before:-z-10 before:-translate-y-1/2 before:rounded-b-[300px] before:rounded-t-sm before:bg-background before:bg-opacity-90 before:blur-[50px] md:top-header-top md:mx-[calc(var(--container-padding-md)-3rem)] md:px-12 lg:mx-[calc(var(--container-padding-lg)-3rem)] xl:mx-[calc(var(--container-padding)-3rem)]',
        className
      )}
      {...props}
    >
      <Link.Link
        className='flex items-center gap-x-5 whitespace-nowrap text-xl font-bold uppercase tracking-widest'
        href='/'
      >
        <Icon.Logo className='h-8' />
        <span className='inline text-base sm:text-xl md:hidden 2xl:inline'>
          {siteConfig.altName}
        </span>
      </Link.Link>
      <nav className='hidden flex-1 items-center justify-end gap-x-[2.25vw] whitespace-nowrap text-sm font-bold lg:flex lg:gap-x-[2.75vw]'>
        <Link.Home isPathnameSensible hasUnderline hasUnderlineOnActive />
        <Link.Cases isPathnameSensible hasUnderline hasUnderlineOnActive />
        <Link.Delivery isPathnameSensible hasUnderline hasUnderlineOnActive />
        <Link.Calculator isPathnameSensible hasUnderline hasUnderlineOnActive />
        <Link.Blog isPathnameSensible hasUnderline hasUnderlineOnActive />
        <Link.About isPathnameSensible hasUnderline hasUnderlineOnActive />
        <Link.Link
          className='text-lg underline underline-offset-4 lg:text-xl'
          href={`tel:${siteConfig.phone}`}
        >
          {siteConfig.altPhone}
        </Link.Link>
      </nav>
      <HeaderBurger />
    </header>
  );
};
