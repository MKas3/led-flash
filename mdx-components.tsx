import type { ImageProps } from 'next/image';

import type { ButtonProps } from '@/components/ui/button';
import type { MDXComponents } from 'mdx/types';

import React from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Icon from '@/components/ui/icon';
import Link from '@/components/ui/link';

export const customMDXComponents: MDXComponents = {
  a: ({ children, ...props }) => (
    <Link.Link {...(props as React.ComponentPropsWithoutRef<typeof Link.Link>)}>
      <GradientText hasUnderline>{children}</GradientText>
    </Link.Link>
  ),
  Button: ({ ...props }) => (
    <Button
      className='mb-16 w-fit rounded-sm text-xs md:rounded-sm lg:rounded-sm lg:text-xs'
      size='xs'
      variant='gradient'
      {...(props as ButtonProps)}
    />
  ),
  Content: ({ ...props }) => (
    <div className='relative flex w-full flex-col' {...props}></div>
  ),
  h1: ({ ...props }) => (
    <Heading
      className='mb-6 text-lg normal-case !leading-normal md:text-2xl md:uppercase lg:text-3xl 2xl:text-5xl'
      as='h1'
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <Heading
      className='mb-7 text-xl font-semibold normal-case !leading-snug md:text-2xl lg:text-3xl 2xl:text-3xl'
      as='h2'
      {...props}
    />
  ),
  HeroImage: ({ ...props }) => (
    <div className='relative col-span-2 row-start-1 -mx-container flex aspect-[13/7] items-center overflow-hidden lg:aspect-[5/1]'>
      <Image
        className='size-full object-cover object-center'
        sizes='100vw'
        style={{ height: '100%', width: '100%' }}
        {...(props as ImageProps)}
      />
    </div>
  ),
  Image: ({ ...props }) => (
    <div className='-mx-container-sm mb-8 flex flex-col gap-y-1 md:mx-0 md:gap-y-2 lg:gap-y-3 xl:gap-y-5'>
      <Image
        className='md:rounded-sm'
        sizes='100vw'
        style={{ height: 'auto', width: '100%' }}
        {...(props as ImageProps)}
      />
      {props.alt && <span className='pl-container-sm text-sm text-muted-foreground md:pl-0 md:text-base lg:text-lg xl:text-xl'>{props.alt}</span>}
    </div>
  ),
  Meta: ({ date, views, ...props }) => (
    <div className='mb-5 flex items-center gap-x-6 md:mb-6'>
      <span
        className='font-poppins text-base'
        {...(props as React.HTMLAttributes<HTMLSpanElement>)}
      >
        {date}
      </span>
      <span
        className='flex items-center gap-x-1 font-poppins text-base text-white/50'
        {...(props as React.HTMLAttributes<HTMLSpanElement>)}
      >
        <Icon.ViewsEye className='size-5' />
        {views}
      </span>
    </div>
  ),
  p: ({ ...props }) => (
    <p className='mb-[2em] font-poppins text-base leading-[1.8] md:text-xl md:leading-[1.8] xl:text-2xl xl:leading-[1.8] [&_+_h2]:mt-[2.5em]' {...props} />
  )
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...customMDXComponents,
    ...components
  };
};
