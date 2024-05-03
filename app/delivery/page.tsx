import { Metadata } from 'next';

import { deliveryQuestions } from '@/config/delivery/delivery';
import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import { Main } from '@/components/ui/main';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Contacts } from '@/components/shared/contacts';

export const metadata: Metadata = {
  title: 'Доставка',
};

export default function DeliveryPage() {
  return (
    <Main>
      <Container className='mb-36' isHero>
        <Heading className='mb-12 mt-24' as='h1' hasUnderline>
          Какие способы <GradientText>доставки</GradientText> есть?
        </Heading>
        <Tabs
          defaultValue={deliveryQuestions[0].value}
          className='mb-24 grid gap-x-7 gap-y-16 lg:grid-cols-2'
        >
          <TabsList
            className='flex-col items-start justify-start gap-y-2 rounded-none bg-transparent md:gap-y-4 xl:gap-y-6'
            variant='ghost'
          >
            {deliveryQuestions.map((item, index) => (
              <TabsTrigger
                key={index}
                className='justify-start !px-0 font-bold opacity-100 transition-opacity before:mr-[0.5em] before:block before:size-[0.5em] before:rounded-full before:bg-foreground before:transition-all data-[state=active]:bg-transparent data-[state=inactive]:opacity-80 data-[state=active]:shadow-none data-[state=inactive]:before:mr-0 data-[state=inactive]:before:size-0 sm:text-sm md:text-lg lg:text-base'
                value={item.value}
              >
                {item.question}
              </TabsTrigger>
            ))}
          </TabsList>
          {deliveryQuestions.map((item, index) => (
            <TabsContent
              tabIndex={-1}
              className='space-y-[1em] px-1 text-sm !leading-loose md:text-base lg:pl-0'
              key={index}
              value={item.value}
            >
              {item.answer}
            </TabsContent>
          ))}
        </Tabs>
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
