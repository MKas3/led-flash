import type { Metadata } from 'next';

import { ArticleCard } from '@/app/blog/_components/article-card';
import { ArticleCardBadge } from '@/app/blog/_components/article-card-badge';
import { ArticleCardImage } from '@/app/blog/_components/article-card-image';
import { ArticleCardTitle } from '@/app/blog/_components/article-card-title';
import { ArticleCardViews } from '@/app/blog/_components/article-card-views';
import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import { Main } from '@/components/ui/main';
import { articlesMetadata } from '@/config/blog/articles';

export const metadata: Metadata = {
  title: 'Блог'
};

export default async function BlogPage() {
  return (
    <Main>
      <Container className='mb-36' isHero>
        <Heading className='mt-24' as='h1' hasUnderline>
          Узнайте больше о
          {' '}
          <GradientText>неоновых</GradientText>
          {' '}
          вывесках
        </Heading>
        <div className='mb-24 grid gap-7 md:grid-cols-2 xl:grid-cols-3'>
          {articlesMetadata.map((item, index) => (
            <ArticleCard key={index} href={item.urlNaming}>
              <div className='relative'>
                <ArticleCardImage alt={item.naming} src={item.previewSrc} />
                {item.tag && <ArticleCardBadge>{item.tag}</ArticleCardBadge>}
              </div>
              <ArticleCardTitle>{item.naming}</ArticleCardTitle>
              <ArticleCardViews>
                {item.views}
                {' '}
                просмотров
              </ArticleCardViews>
            </ArticleCard>
          ))}
        </div>
      </Container>
    </Main>
  );
}
