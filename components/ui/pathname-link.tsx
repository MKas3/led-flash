'use client';

import React, { forwardRef, useMemo } from 'react';

import { usePathname } from 'next/navigation';

import Link from '@/components/ui/link';

const PathnameLink = forwardRef<
  React.ElementRef<typeof Link.Link>,
  React.ComponentPropsWithoutRef<typeof Link.Link>
>(({ href, ...props }, ref) => {
  const pathname = usePathname();
  const isActive = useMemo(
    () =>
      pathname && href.toString() === '/'
        ? pathname === href.toString()
        : pathname.startsWith(href.toString()),
    [pathname, href]
  );

  return <Link.Link ref={ref} data-active={isActive} href={href} {...props} />;
});
PathnameLink.displayName = 'PathnameLink';

export { PathnameLink };
