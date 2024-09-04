import type { Metadata } from 'next';

import React from 'react';

import { Cases } from '@/app/cases/_components/cases';
import { AppearingContainer } from '@/components/ui/appearing-container';
import { AppearingAnimationText } from '@/components/ui/appearing-text/appearing-animation-text';
import { AppearingAnimationTextPart } from '@/components/ui/appearing-text/appearing-animation-text-part';
import { AppearingContentText } from '@/components/ui/appearing-text/appearing-content-text';
import { AppearingText } from '@/components/ui/appearing-text/appearing-text';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import { Main } from '@/components/ui/main';

export const metadata: Metadata = {
  title: 'Кейсы'
};

export default function CasesPage() {
  return (
    <Main>
      <AppearingContainer isHero>
        <Heading
          className='mt-24 md:mb-12'
          as='h1'
          hasUnderline
        >
          <AppearingText>
            <AppearingAnimationText>
              <AppearingAnimationTextPart>
                Наши
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                любимые
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                <GradientText>работы</GradientText>
              </AppearingAnimationTextPart>
            </AppearingAnimationText>
            <AppearingContentText>
              Наши любимые
              {' '}
              <GradientText>работы</GradientText>
            </AppearingContentText>
          </AppearingText>
        </Heading>
        <Cases />
      </AppearingContainer>
    </Main>
  );
}
