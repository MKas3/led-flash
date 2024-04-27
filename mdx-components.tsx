import type { MDXComponents } from 'mdx/types';

import Image, { ImageProps } from 'next/image';

import { Heading } from '@/components/ui/heading';

export const customMDXComponents: MDXComponents = {
  h1: ({ ...props }) => <Heading as='h1' {...props} />,
  h2: ({ ...props }) => <Heading as='h1' {...props} />,
  h3: ({ ...props }) => <Heading as='h1' {...props} />,
  img: (props) => (
    <Image
      sizes='100vw'
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
    />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customMDXComponents,
    ...components,
  };
}
