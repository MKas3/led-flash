import type { MDXComponents } from 'mdx/types';

import React from 'react';
import Image, { ImageProps } from 'next/image';

import { Button, ButtonProps } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Icon from '@/components/ui/icon';
import Link from '@/components/ui/link';

export const customMDXComponents: MDXComponents = {
  h1: ({ ...props }) => (
    <Heading
      className='mb-24 text-lg !leading-snug md:text-4xl lg:text-4xl 2xl:text-4xl'
      as='h1'
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <Heading
      className='mb-7 text-3xl font-semibold normal-case !leading-snug md:text-3xl lg:text-3xl 2xl:text-3xl'
      as='h2'
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p className='mb-[2em] [&_+_h2]:mt-[2.5em]' {...props} />
  ),
  a: ({ children, ...props }) => (
    <Link.Link {...(props as React.ComponentPropsWithoutRef<typeof Link.Link>)}>
      <GradientText hasUnderline>{children}</GradientText>
    </Link.Link>
  ),
  HeroImage: ({ ...props }) => (
    <div className='absolute -inset-x-2 top-0 -z-10 w-full md:left-0 md:right-auto'>
      <Image
        className='w-full rounded-sm'
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    </div>
  ),
  Meta: ({ date, views, ...props }) => (
    <div className='mb-2 flex items-center gap-x-6 md:mb-5'>
      <span
        className='font-poppins text-2xs md:text-xs'
        {...(props as React.HTMLAttributes<HTMLSpanElement>)}
      >
        {date}
      </span>
      <span
        className='flex items-center gap-x-1 font-poppins text-xs text-white/50'
        {...(props as React.HTMLAttributes<HTMLSpanElement>)}
      >
        <Icon.ViewsEye className='size-5' />
        {views}
      </span>
    </div>
  ),
  Image: ({ ...props }) => (
    <div className='mb-20 md:mx-[-12.5%] lg:mx-[-20%] 2xl:mx-[-50%]'>
      <Image
        className='rounded-sm'
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    </div>
  ),
  Button: ({ ...props }) => (
    <Button
      className='mb-16 rounded-sm text-xs md:rounded-sm lg:rounded-sm lg:text-xs'
      variant='gradient'
      size='xs'
      {...(props as ButtonProps)}
    />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customMDXComponents,
    ...components,
  };
}
