import { Metadata } from 'next';

import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import { Main } from '@/components/ui/main';
import { Contacts } from '@/components/shared/contacts';

export const metadata: Metadata = {
  title: 'О нас',
};

export default async function AboutPage() {
  return (
    <Main>
      <Container className='mb-36' isHero>
        <Heading className='mt-24' as='h1' hasUnderline>
          Больше информации о <GradientText>нашей команде</GradientText>
        </Heading>
        <figure className='indent-[1em] text-base italic md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
          <blockquote>
            <p className='mb-[1em]'>
              “Мы команда LED-FLASH, создаем невообразимые неоновые вывески для
              бизнеса, интерьера и праздников. Безумно ценим каждого нашего
              клиента, поскольку готовы жертвовать и отвечать делом, ручаясь за
              свою работу на все сто.
            </p>
            <p>
              Длительное сотрудничество с вами для нас в кратном приоритете, мы
              предложим вам скидку, выгодное решение, позовем в баню на
              выходных, в общем сделаем так, чтобы все работало как нужно и
              привлекало внимание клиентов в ваш бизнес. Мы вас ждем.”{' '}
              <figcaption className='inline font-semibold not-italic'>
                - основатель компании <cite>Станислав Канатьев</cite>
              </figcaption>
            </p>
          </blockquote>{' '}
        </figure>
      </Container>
      <Container>
        <Heading className='mb-12' as='h2' hasUnderline>
          Как с нами <GradientText>связаться?</GradientText>
        </Heading>
        <Contacts />
      </Container>
    </Main>
  );
}
