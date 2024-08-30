import type { ButtonProps } from '@/components/ui/button';

import * as React from 'react';

import { buttonVariants } from '@/components/ui/button';
import Link from '@/components/ui/link';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    className={cn('mx-auto flex w-full justify-center', className)}
    aria-label='pagination'
    role='navigation'
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = Pick<ButtonProps, 'size'> & React.ComponentPropsWithoutRef<typeof Link.Link> &
  {
    isActive?: boolean;
  };

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <Link.Link
    className={cn(
      buttonVariants({
        size,
        variant: isActive ? 'outline' : 'ghost'
      }),
      className
    )}
    aria-current={isActive ? 'page' : undefined}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    className={cn('gap-1 pl-2.5', className)}
    aria-label='Go to previous page'
    size='default'
    {...props}
  >
    <ChevronLeft className='size-4' />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    className={cn('gap-1 pr-2.5', className)}
    aria-label='Go to next page'
    size='default'
    {...props}
  >
    <span>Next</span>
    <ChevronRight className='size-4' />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    className={cn('flex size-9 items-center justify-center', className)}
    aria-hidden
    {...props}
  >
    <MoreHorizontal className='size-4' />
    <span className='sr-only'>More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
};
