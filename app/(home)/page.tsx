import { faqQuestions } from '@/config/home/faq';
import { services } from '@/config/home/services';
import { works } from '@/config/home/works';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Link from '@/components/ui/link';
import { Main } from '@/components/ui/main';
import { Separator } from '@/components/ui/separator';
import { Constructor } from '@/app/(home)/_components/constructor/constructor';
import { HeroContainer } from '@/app/(home)/_components/hero-container';
import { ServiceCard } from '@/app/(home)/_components/services/service-card';
import { ServiceCardDescription } from '@/app/(home)/_components/services/service-card-description';
import { ServiceCardImage } from '@/app/(home)/_components/services/service-card-image';
import { ServiceCardTitle } from '@/app/(home)/_components/services/service-card-title';
import { WorksCarousel } from '@/app/(home)/_components/works/works-carousel';
import { WorksItem } from '@/app/(home)/_components/works/works-item';
import { WorksItemCompany } from '@/app/(home)/_components/works/works-item-company';
import { WorksItemContent } from '@/app/(home)/_components/works/works-item-content';
import { WorksItemImage } from '@/app/(home)/_components/works/works-item-image';
import { WorksItemTitle } from '@/app/(home)/_components/works/works-item-title';

export default function HomePage() {
  return (
    <Main>
      <HeroContainer>
        <Heading className='md:mt-24' as='h1'>
          Неоновые <br />
          вывески на <br />
          заказ <GradientText>за 3 дня</GradientText>
        </Heading>
        <div className='flex flex-wrap justify-start gap-x-5 gap-y-12 md:flex-nowrap md:justify-center md:gap-x-10'>
          <Button
            className='order-1 w-full md:order-none md:w-auto'
            variant='gradient'
          >
            Рассчитать стоимость
          </Button>
          <Separator className='h-auto bg-foreground' orientation='vertical' />
          <span className='my-auto font-bold lg:text-xl 2xl:text-3xl'>
            Бесплатная <br />
            доставка по всей России
          </span>
        </div>
      </HeroContainer>
      <Container className='mb-36 gap-y-16'>
        <Heading as='h2'>
          Хватит быть в тени закажи вывеску из{' '}
          <GradientText>неона</GradientText>
        </Heading>
        <div className='grid grid-cols-[58px_minmax(0,1fr)] gap-12'></div>
      </Container>
      <Container
        className='mb-36 overflow-visible before:inset-x-[40%] before:inset-y-[20%]'
        padding='none'
        gradient='to-top'
      >
        <div className='flex flex-col items-center space-y-6 overflow-hidden px-container-sm md:space-y-12 md:px-container-md lg:px-container-lg xl:px-container'>
          <Heading className='self-start' as='h2'>
            Самые <GradientText>сочные</GradientText> работы
          </Heading>
          <WorksCarousel>
            {works.map((item, index) => (
              <WorksItem key={index}>
                <WorksItemImage src={item.imageSrc} alt={item.naming} />
                <WorksItemContent>
                  <WorksItemTitle>{item.naming}</WorksItemTitle>
                  <WorksItemCompany>{item.company}</WorksItemCompany>
                </WorksItemContent>
              </WorksItem>
            ))}
          </WorksCarousel>
        </div>
      </Container>
      <Container className='mb-36 items-center gap-y-16 overflow-visible'>
        <Heading className='self-start' as='h2'>
          Что мы можем для вас <GradientText>сделать</GradientText>?
        </Heading>
        <div className='grid gap-x-6 gap-y-9 lg:grid-cols-1 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-1 2xl:gap-x-12'>
          {services.map((item, index) => (
            <ServiceCard key={index}>
              <ServiceCardTitle>{item.naming}</ServiceCardTitle>
              <ServiceCardDescription>
                {item.description}
              </ServiceCardDescription>
              <ServiceCardImage src={item.imageSrc} alt={item.naming} />
            </ServiceCard>
          ))}
        </div>
        <Link.Cases
          className={cn(
            buttonVariants({ variant: 'outline', className: 'w-fit' })
          )}
        >
          Посмотреть больше
        </Link.Cases>
      </Container>
      <Container className='mb-36 px-container'>
        <Heading className='mb-8' as='h2'>
          Какие цвета <GradientText>неона</GradientText> у нас есть
        </Heading>
        <span className='mb-16 text-base md:text-xl lg:text-3xl'>
          Создайте неоновую ленту на свой вкус, опробуйте основные функции всех
          типов неона, задав необходимые параметры и выбрав свой цвет.
        </span>
        <Constructor />
      </Container>
      <Container className='mb-36'>
        <Heading className='mb-8' as='h2'>
          Вопросы от <GradientText>наших клиентов</GradientText>
        </Heading>
        <Accordion
          className='grid grid-cols-1 gap-x-20 gap-y-12 lg:grid-cols-2'
          type='multiple'
        >
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className='flex flex-col gap-y-12'>
              {faqQuestions
                .slice(
                  (faqQuestions.length / 2) * index,
                  (faqQuestions.length / 2) * (index + 1)
                )
                .map((item, index) => (
                  <AccordionItem key={index} value={item.value}>
                    <AccordionTrigger className='text-start text-xl'>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
            </div>
          ))}
        </Accordion>
      </Container>
    </Main>
  );
}
