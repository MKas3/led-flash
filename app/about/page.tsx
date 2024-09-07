import type { Metadata } from 'next';

import { Contacts } from '@/components/shared/contacts';
import { AppearingContainer } from '@/components/ui/appearing-container';
import { AppearingAnimationText } from '@/components/ui/appearing-text/appearing-animation-text';
import { AppearingAnimationTextPart } from '@/components/ui/appearing-text/appearing-animation-text-part';
import { AppearingContentText } from '@/components/ui/appearing-text/appearing-content-text';
import { AppearingText } from '@/components/ui/appearing-text/appearing-text';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import { Main } from '@/components/ui/main';

export const metadata: Metadata = {
  title: 'О нас'
};

export default async function AboutPage() {
  return (
    <Main>
      <AppearingContainer className='mb-36' isHero>
        <Heading className='mt-24' as='h1' hasUnderline>
          <AppearingText>
            <AppearingAnimationText>
              <AppearingAnimationTextPart>
                Больше
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                информации
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                о
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                <GradientText className='to-[200%]'>
                  нашей
                </GradientText>
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                <GradientText className='from-[-100%]'>
                  команде
                </GradientText>
              </AppearingAnimationTextPart>
            </AppearingAnimationText>
            <AppearingContentText>
              Больше информации о
              {' '}
              <GradientText>нашей команде</GradientText>
            </AppearingContentText>
          </AppearingText>
        </Heading>
        <figure className='indent-[1em] text-base italic md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
          <blockquote>
            <p>
              “Мы команда
              {' '}
              <span className='animate-blinker bg-gradient-to-l from-gradient-second to-gradient-first bg-clip-text font-semibold not-italic text-transparent'>LED-FLASH</span>
              , создаем невообразимые неоновые вывески для
              бизнеса, интерьера и праздников. Безумно ценим каждого нашего
              клиента, поскольку готовы жертвовать и отвечать делом, ручаясь за
              свою работу на все сто.
            </p>
            <br />
            <p>
              Длительное сотрудничество с вами для нас в кратном приоритете, мы
              предложим вам скидку, выгодное решение, позовем в баню на
              выходных, в общем сделаем так, чтобы все работало как нужно и
              привлекало внимание клиентов в ваш бизнес. Мы вас ждем.”
            </p>
            <br />
            <figcaption className='inline font-semibold not-italic'>
              - основатель компании
              {' '}
              <cite>Станислав Канатьев</cite>
            </figcaption>
          </blockquote>
          {' '}
        </figure>
      </AppearingContainer>
      <AppearingContainer>
        <Heading className='mb-12 before:slide-in-from-left-0' as='h2' hasUnderline>
          <AppearingText>
            <AppearingAnimationText animate={false} viewport={{ once: true }} whileInView='animate-appearing'>
              <AppearingAnimationTextPart>
                Как
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                с
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                нами
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                <GradientText>связаться?</GradientText>
              </AppearingAnimationTextPart>
            </AppearingAnimationText>
            <AppearingContentText>
              Как с нами
              {' '}
              <GradientText>связаться?</GradientText>
            </AppearingContentText>
          </AppearingText>
        </Heading>
        <Contacts />
      </AppearingContainer>
    </Main>
  );
}
