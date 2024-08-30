'use client';

import React, { forwardRef } from 'react';

import { Button } from '@/components/ui/button';
import LinkPrimitive from '@/components/ui/link';
import { useLenis } from 'lenis/react';

const AnchorLink = forwardRef<
  React.ElementRef<typeof LinkPrimitive.Link>,
  Omit<React.ComponentPropsWithoutRef<typeof Button> & React.ComponentPropsWithoutRef<typeof LinkPrimitive.Link>, 'href'> & {
    href: number | string;
    options?: Parameters<NonNullable<ReturnType<typeof useLenis>>['scrollTo']>[1];
  }
>(({ href, options, ...props }, ref) => {
  const lenis = useLenis();

  const onClick = <T = HTMLButtonElement>(event: React.MouseEvent<T>) => {
    event.preventDefault();
    lenis?.scrollTo(href, options);
  };

  if (typeof href === 'number') return <Button onClick={onClick} {...props} />;

  return <LinkPrimitive.Link ref={ref} href={href} onClick={onClick} {...props} />;
});
AnchorLink.displayName = 'AnchorLink';

export { AnchorLink };
