import type { Metadata } from 'next';

import { Contacts } from '@/components/shared/contacts';
import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import { Main } from '@/components/ui/main';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { deliveryQuestions } from '@/config/delivery/delivery';

export const metadata: Metadata = {
  title: 'Доставка'
};

export default function DeliveryPage() {
  return (
    <Main>
      <Container className='mb-36' isHero>
        <Heading
          className='mb-6 mt-24 md:mb-12'
          as='h1'
          hasUnderline
        >
          Какие способы
          {' '}
          <GradientText>доставки</GradientText>
          {' '}
          есть?
        </Heading>
        <Tabs
          className='mb-12 grid gap-x-24 gap-y-9 md:mb-24 lg:grid-cols-[min-content_auto]'
          defaultValue={deliveryQuestions[0].value}
        >
          <TabsList
            className='flex-col items-start justify-start rounded-none bg-transparent'
            variant='ghost'
          >
            {deliveryQuestions.map((item, index) => (
              <TabsTrigger
                key={index}
                className='justify-start p-1 !px-0 text-sm font-bold opacity-100 transition-opacity before:mr-[0.5em] before:block before:size-[0.5em] before:rounded-full before:bg-foreground before:transition-all data-[state=active]:bg-transparent data-[state=inactive]:opacity-80 data-[state=active]:shadow-none data-[state=inactive]:before:mr-0 data-[state=inactive]:before:size-0 sm:text-sm md:p-2 md:text-lg lg:p-3 lg:text-base xl:text-lg 2xl:text-xl'
                value={item.value}
              >
                {item.question}
              </TabsTrigger>
            ))}
          </TabsList>
          {deliveryQuestions.map((item, index) => (
            <TabsContent
              key={index}
              className='space-y-[1em] px-1 text-sm !leading-loose md:text-base lg:pl-0 lg:text-lg'
              tabIndex={-1}
              value={item.value}
            >
              {item.answer}
            </TabsContent>
          ))}
        </Tabs>
      </Container>
      <Container>
        <Heading className='mb-12' as='h2' hasUnderline>
          Как с нами
          {' '}
          <GradientText>связаться?</GradientText>
        </Heading>
        <Contacts />
      </Container>
    </Main>
  );
}
