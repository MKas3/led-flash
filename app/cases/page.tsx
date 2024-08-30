import type { Metadata } from 'next';

import { Cases } from '@/app/cases/_components/cases';
import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import { Main } from '@/components/ui/main';

export const metadata: Metadata = {
  title: 'Кейсы'
};

export default function CasesPage() {
  return (
    <Main>
      <Container isHero>
        <Heading
          className='mt-24 md:mb-12'
          as='h1'
          hasUnderline
        >
          Наши любимые
          {' '}
          <GradientText>работы</GradientText>
        </Heading>
        <Cases />
      </Container>
    </Main>
  );
}
