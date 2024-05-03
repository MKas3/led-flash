import { Metadata } from 'next';

import { cases } from '@/config/cases/cases';
import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import { Main } from '@/components/ui/main';
import { Case } from '@/app/cases/_components/case';
import { CaseMain } from '@/app/cases/_components/case-main';
import { CaseMainCompany } from '@/app/cases/_components/case-main-company';
import { CaseMainTitle } from '@/app/cases/_components/case-main-title';
import { CasesCarousel } from '@/app/cases/_components/cases-carousel';
import { CasesCarouselAfter } from '@/app/cases/_components/cases-carousel-after';
import { CasesCarouselBefore } from '@/app/cases/_components/cases-carousel-before';
import { CasesWrapper } from '@/app/cases/_components/cases-wrapper';

export const metadata: Metadata = {
  title: 'Кейсы',
};

export default function CasesPage() {
  return (
    <Main>
      <Container className='mb-36' isHero>
        <Heading className='mb-12 mt-24' as='h1' hasUnderline>
          Наши любимые <GradientText>работы</GradientText>
        </Heading>
        <div className='flex flex-col gap-y-8'>
          {cases.map((item, index) => (
            <CasesWrapper key={index}>
              <CaseMain>
                <CaseMainTitle>{item.naming}</CaseMainTitle>
                <CaseMainCompany>{item.company}</CaseMainCompany>
              </CaseMain>
              <CasesCarousel>
                <CasesCarouselBefore />
                {item.cases.map((companyCase, index) => (
                  <Case
                    key={index}
                    src={companyCase.imageSrc}
                    alt={companyCase.imageAlt}
                    width={companyCase.imageWidth}
                    height={companyCase.imageHeight}
                  />
                ))}
                <CasesCarouselAfter />
              </CasesCarousel>
            </CasesWrapper>
          ))}
        </div>
      </Container>
    </Main>
  );
}
