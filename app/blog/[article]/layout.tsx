import React from 'react';

import { Container } from '@/components/ui/container';
import { Main } from '@/components/ui/main';

export default function ArticlesLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Main>
      <Container className='mb-36' isHero>
        <div className='relative px-[2.5%] pt-[2.5vw] md:px-[10%] md:pt-[7.5vw] lg:px-[15%] lg:pt-[10vw] 2xl:px-[25%] 2xl:pt-[12.5vw]'>
          {children}
        </div>
      </Container>
    </Main>
  );
}
