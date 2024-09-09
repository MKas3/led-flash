import type { VariantProps } from 'class-variance-authority';

import React, { forwardRef } from 'react';

import LinkPrimitive from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { PathnameLink } from '@/components/ui/pathname-link';
import { navigationHrefs, xeraseHref } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const linkVariants = cva('transition-opacity hover:opacity-90', {
  defaultVariants: {
    hasUnderline: false,
    variant: 'link'
  },
  variants: {
    hasUnderline: {
      false: '',
      true: `[--offset:0] [--width:0] [background:linear-gradient(currentColor_0_0)_var(--offset,0)_100%_/var(--width,0)_2px_no-repeat] [transition:0.3s,background-position_0s_0.3s] hover:[--offset:100%] hover:[--width:100%]`
    },
    hasUnderlineOnActive: {
      false: '',
      true: 'data-[active=true]:[--offset:100%] data-[active=true]:[--width:100%]'
    },
    variant: {
      button:
        `flex items-center justify-center rounded-sm border border-transparent bg-muted text-base font-bold data-[active=true]:border-[#6B6B6B] data-[active=true]:bg-[#383838]`,
      link: ''
    }
  }
});

const Link = forwardRef<
  React.ElementRef<typeof LinkPrimitive>,
  React.ComponentPropsWithoutRef<typeof LinkPrimitive> &
  VariantProps<typeof linkVariants>
>(
  (
    { className, hasUnderline, hasUnderlineOnActive, variant, ...props },
    ref
  ) => {
    return (
      <LinkPrimitive
        ref={ref}
        className={cn(
          linkVariants({
            hasUnderline,
            hasUnderlineOnActive,
            variant
          }),
          className
        )}
        {...props}
      />
    );
  }
);
Link.displayName = 'Link';

const TemplateLink = ({
  altNaming,
  href,
  naming
}: {
  altNaming: string;
  href: string;
  naming: string;
}) => {
  const link = forwardRef<
    React.ElementRef<typeof Link>,
    Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
      isPathnameSensible?: boolean;
    }
  >(({ isPathnameSensible, children, ...props }, ref) => {
    const Comp = isPathnameSensible ? PathnameLink : Link;

    return (
      <Comp ref={ref} href={href} {...props}>
        {children ?? altNaming}
      </Comp>
    );
  });
  link.displayName = naming;

  return link;
};

const Home = TemplateLink(navigationHrefs.home);
const Cases = TemplateLink(navigationHrefs.cases);
const Delivery = TemplateLink(navigationHrefs.delivery);
const Calculator = TemplateLink(navigationHrefs.calculator);
const Blog = TemplateLink(navigationHrefs.blog);
const About = TemplateLink(navigationHrefs.about);
const Policy = TemplateLink(navigationHrefs.policy);

const Phone = forwardRef<
  React.ElementRef<typeof Link>,
  Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> &
  Pick<Partial<React.ComponentPropsWithoutRef<typeof Link>>, 'href'>
>(({ className, href, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn('underline decoration-2 underline-offset-4', className)}
    href={href ?? `tel:${siteConfig.phone}`}
    {...props}
  >
    {siteConfig.altPhone}
  </Link>
));
Phone.displayName = 'PhoneLink';

const Email = forwardRef<
  React.ElementRef<typeof Link>,
  Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> &
  Pick<Partial<React.ComponentPropsWithoutRef<typeof Link>>, 'href'>
>(({ className, href, children, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn('underline decoration-2 underline-offset-4', className)}
    href={href ?? `mailto:${siteConfig.email}`}
    {...props}
  >
    {children ?? siteConfig.email}
  </Link>
));
Email.displayName = 'EmailLink';

const Xerase = forwardRef<
  React.ElementRef<typeof Link>,
  Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> &
  Pick<Partial<React.ComponentPropsWithoutRef<typeof Link>>, 'href'> &
  VariantProps<typeof buttonVariants>
>(({ className, href, size, variant: _variant, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn(
      'group relative overflow-hidden p-0 md:text-lg text-base lg:text-xl font-semibold',
      className
    )}
    href={href ?? xeraseHref}
    {...props}
  >
    <span
      className={cn(
        buttonVariants({ variant: 'foreground' }),
        `absolute inset-0 flex size-full -translate-y-[150%] flex-col items-center justify-center !p-0 text-base md:text-lg transition-transform group-hover:translate-y-0 lg:text-xl xl:text-2xl`
      )}
    >
      Перейти
    </span>
    <span className='flex items-center gap-x-6 transition-transform group-hover:translate-y-full'>
      <Icon.XeraseLogo className='size-[2.5em]' />
      Made in Xerase
    </span>
  </Link>
));
Xerase.displayName = 'XeraseLink';

export default {
  About,
  Blog,
  Calculator,
  Cases,
  Delivery,
  Email,
  Home,
  Link,
  Phone,
  Policy,
  Xerase
};
