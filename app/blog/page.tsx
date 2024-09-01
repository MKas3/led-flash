import type { Metadata } from 'next';

import React from 'react';

import { ArticleCard } from '@/app/blog/_components/article-card';
import { ArticleCardBadge } from '@/app/blog/_components/article-card-badge';
import { ArticleCardImage } from '@/app/blog/_components/article-card-image';
import { ArticleCardTitle } from '@/app/blog/_components/article-card-title';
import { ArticleCardViews } from '@/app/blog/_components/article-card-views';
import { AppearingContainer } from '@/components/ui/appearing-container';
import { AppearingAnimationText } from '@/components/ui/appearing-text/appearing-animation-text';
import { AppearingAnimationTextPart } from '@/components/ui/appearing-text/appearing-animation-text-part';
import { AppearingContentText } from '@/components/ui/appearing-text/appearing-content-text';
import { AppearingText } from '@/components/ui/appearing-text/appearing-text';
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
      <AppearingContainer className='mb-36' isHero>
        <Heading className='mt-24' as='h1' hasUnderline>
          <AppearingText>
            <AppearingAnimationText>
              <AppearingAnimationTextPart>
                Узнайте больше о
              </AppearingAnimationTextPart>
              <br />
              <AppearingAnimationTextPart>
                <GradientText>неоновых</GradientText>
                &nbsp;вывесках
              </AppearingAnimationTextPart>
            </AppearingAnimationText>
            <AppearingContentText>
              Узнайте больше о
              {' '}
              <GradientText>неоновых</GradientText>
              {' '}
              вывесках
            </AppearingContentText>
          </AppearingText>

        </Heading>
        <AppearingContainer className='mb-24 grid gap-7 md:grid-cols-2 xl:grid-cols-3' padding='none'>
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
        </AppearingContainer>
      </AppearingContainer>
    </Main>
  );
}
