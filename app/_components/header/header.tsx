import React, { forwardRef } from 'react';

import { HeaderBurger } from '@/app/_components/header/header-burger';
import Icon from '@/components/ui/icon';
import Link from '@/components/ui/link';
import { siteConfig } from '@/config/site';

import { cn } from '@/lib/utils';

type HeaderProps = React.HTMLAttributes<HTMLElement>;

const Header = forwardRef<HTMLElement, HeaderProps>(({ className, ...props }, ref) => {
  return (
    <header
      ref={ref}
      className={cn(
        `pointer-events-auto fixed delay-1000 duration-1000 ease-in-out animate-in slide-in-from-top-[110%] fill-mode-both top-0 text-foreground mix-blend-difference inset-x-0 z-30 flex h-header items-center justify-between gap-x-10 px-container-sm md:px-container-md lg:px-container-lg xl:px-container`,
        className
      )}
      {...props}
    >
      <Link.Link
        className='flex items-center gap-x-5 whitespace-nowrap text-xl font-bold uppercase tracking-widest'
        href='/'
      >
        <Icon.Logo className='h-9' />
        <span className='inline text-base sm:text-xl'>
          {siteConfig.altNaming}
        </span>
      </Link.Link>
      <nav className='hidden flex-1 items-center justify-end gap-x-[2.25vw] whitespace-nowrap font-semibold lg:flex lg:gap-x-[2.75vw] lg:text-xs xl:text-sm'>
        <Link.Home hasUnderline hasUnderlineOnActive isPathnameSensible />
        <Link.Cases hasUnderline hasUnderlineOnActive isPathnameSensible />
        <Link.Delivery hasUnderline hasUnderlineOnActive isPathnameSensible />
        <Link.Calculator hasUnderline hasUnderlineOnActive isPathnameSensible />
        <Link.Blog hasUnderline hasUnderlineOnActive isPathnameSensible />
        <Link.About hasUnderline hasUnderlineOnActive isPathnameSensible />
        <Link.Phone className='text-lg xl:text-xl' />
      </nav>
      <HeaderBurger />
    </header>
  );
});
Header.displayName = 'Header';

export { Header };
