import React, { forwardRef } from 'react';
import LinkPrimitive from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';

import { navigationHrefs } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { PathnameLink } from '@/components/ui/pathname-link';

const linkVariants = cva('', {
  variants: {
    variant: {
      link: '',
      button:
        'flex items-center justify-center rounded-sm border border-transparent bg-muted text-base font-bold data-[active=true]:border-[#6B6B6B] data-[active=true]:bg-[#383838]',
    },
    hasUnderline: {
      true: '[--offset:0] [--width:0] [background:linear-gradient(currentColor_0_0)_var(--offset,0)_100%_/var(--width,0)_2px_no-repeat] [transition:0.3s,background-position_0s_0.3s] hover:[--offset:100%] hover:[--width:100%]',
      false: '',
    },
    hasUnderlineOnActive: {
      true: 'data-[active=true]:[--offset:100%] data-[active=true]:[--width:100%] ',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'link',
    hasUnderline: false,
  },
});

const Link = forwardRef<
  React.ElementRef<typeof LinkPrimitive>,
  React.ComponentPropsWithoutRef<typeof LinkPrimitive> &
    VariantProps<typeof linkVariants>
>(
  (
    { variant, hasUnderline, hasUnderlineOnActive, className, ...props },
    ref
  ) => {
    return (
      <LinkPrimitive
        ref={ref}
        className={cn(
          linkVariants({
            variant,
            hasUnderline,
            hasUnderlineOnActive,
            className,
          })
        )}
        {...props}
      />
    );
  }
);
Link.displayName = 'Link';

const TemplateLink = ({
  naming,
  altNaming,
  href,
}: {
  naming: string;
  altNaming: string;
  href: string;
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

const Phone = forwardRef<
  React.ElementRef<typeof Link>,
  Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> &
    Pick<Partial<React.ComponentPropsWithoutRef<typeof Link>>, 'href'>
>(({ href, className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn('underline underline-offset-4', className)}
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
>(({ href, className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn('underline underline-offset-4', className)}
    href={href ?? `mailto:${siteConfig.email}`}
    {...props}
  >
    {siteConfig.email}
  </Link>
));
Email.displayName = 'EmailLink';

export default {
  Link,
  Home,
  Cases,
  Delivery,
  Calculator,
  Blog,
  About,
  Phone,
  Email,
};
