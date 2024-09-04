import React from 'react';

import { ArticleCollapsible } from '@/app/blog/[article]/_components/article-collapsible';
import { Container } from '@/components/ui/container';
import { Main } from '@/components/ui/main';

export default function ArticlesLayout({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <Main className='w-auto'>
      <Container className='grid grid-cols-1 gap-y-6 !pt-0 lg:grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)] lg:gap-x-16' isHero>
        {children}
        <ArticleCollapsible />
      </Container>
    </Main>
  );
}
