import React from 'react';
import { Bold } from 'lucide-react';

import { comments, commentsAverageRating } from '@/config/home/comments';
import { faqQuestions } from '@/config/home/faq';
import { prices } from '@/config/home/prices';
import { works } from '@/config/home/works';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AppearingContainer } from '@/components/ui/appearing-container';
import { Button, buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Icon from '@/components/ui/icon';
import Link from '@/components/ui/link';
import { Main } from '@/components/ui/main';
import { ScrollBlurContainer } from '@/components/ui/scroll-blur-container';
import { Separator } from '@/components/ui/separator';
import { Benefit } from '@/app/(home)/_components/benefits/benefit';
import { BenefitIcon } from '@/app/(home)/_components/benefits/benefit-icon';
import { BenefitTitle } from '@/app/(home)/_components/benefits/benefit-title';
import { Benefits } from '@/app/(home)/_components/benefits/benefits';
import { BenefitsMotionWrapper } from '@/app/(home)/_components/benefits/benefits-motion-wrapper';
import { Comment } from '@/app/(home)/_components/comments/comment';
import { CommentAuthor } from '@/app/(home)/_components/comments/comment-author';
import { CommentAuthorAvatar } from '@/app/(home)/_components/comments/comment-author-avatar';
import { CommentAuthorDate } from '@/app/(home)/_components/comments/comment-author-date';
import { CommentContent } from '@/app/(home)/_components/comments/comment-content';
import { CommentImage } from '@/app/(home)/_components/comments/comment-image';
import { CommentNaming } from '@/app/(home)/_components/comments/comment-naming';
import { Comments } from '@/app/(home)/_components/comments/comments';
import { CommentsCarousel } from '@/app/(home)/_components/comments/comments-carousel';
import { CommentsHeader } from '@/app/(home)/_components/comments/comments-header';
import { CommentsStars } from '@/app/(home)/_components/comments/comments-stars';
import { Constructor } from '@/app/(home)/_components/constructor/constructor';
import { Price } from '@/app/(home)/_components/price/price';
import { PriceCard } from '@/app/(home)/_components/price/price-card';
import { PriceCardDots } from '@/app/(home)/_components/price/price-card-dots';
import { PriceCardNumber } from '@/app/(home)/_components/price/price-card-number';
import { PriceCardText } from '@/app/(home)/_components/price/price-card-text';
import { PricesMotionWrapper } from '@/app/(home)/_components/price/prices-motion-wrapper';
import { WorksCarousel } from '@/app/(home)/_components/works/works-carousel';
import { WorksItem } from '@/app/(home)/_components/works/works-item';
import { WorksItemCompany } from '@/app/(home)/_components/works/works-item-company';
import { WorksItemContent } from '@/app/(home)/_components/works/works-item-content';
import { WorksItemImage } from '@/app/(home)/_components/works/works-item-image';
import { WorksItemTitle } from '@/app/(home)/_components/works/works-item-title';

export default function HomePage() {
  return (
    <Main>
      <ScrollBlurContainer
        isHero
        isAlternate
        className='flex h-screen flex-col justify-center gap-y-12 overflow-hidden'
      >
        <Heading className='md:mt-24' as='h1'>
          <span className='relative z-10'>
            Неоновые <br />
            вывески на <br />
            заказ
          </span>{' '}
          <GradientText>за 3 дня</GradientText>
        </Heading>
        <div className='flex flex-wrap justify-start gap-x-5 gap-y-12 md:flex-nowrap md:justify-center md:gap-x-10'>
          <Button
            className='order-1 w-full md:order-none md:w-auto'
            variant='gradient'
          >
            Рассчитать стоимость
          </Button>
          <Separator
            className='z-10 h-auto bg-background'
            orientation='vertical'
          />
          <span className='z-10 my-auto font-bold lg:text-xl 2xl:text-3xl'>
            Бесплатная <br />
            доставка по всей России
          </span>
        </div>
        <div className='absolute top-0 h-screen w-[13vw] animate-hero-overlay bg-foreground mix-blend-overlay' />
      </ScrollBlurContainer>
      <ScrollBlurContainer
        containerClassName='mb-36'
        padding='none'
        scrollOptions={{ offset: ['66% start', 'end start'] }}
      >
        <AppearingContainer className='gap-y-16 pt-16'>
          <BenefitsMotionWrapper>
            <Heading className='mb-12' as='h2'>
              Хватит быть в тени закажи вывеску из{' '}
              <GradientText>неона</GradientText>
            </Heading>
            <Benefits>
              <Benefit benefitIndex={0}>
                <BenefitIcon>
                  <Icon.Gift />
                </BenefitIcon>
                <BenefitTitle>
                  Дизайн-макет с расчетом стоимости{' '}
                  <strong className='font-bold uppercase'>бесплатно</strong>
                </BenefitTitle>
              </Benefit>
              <Benefit benefitIndex={1}>
                <BenefitIcon>
                  <Icon.Lightning />
                </BenefitIcon>
                <BenefitTitle>Срочные заказы изготовим за 1 день</BenefitTitle>
              </Benefit>
              <Benefit benefitIndex={2}>
                <BenefitIcon>
                  <Icon.CreditCard />
                </BenefitIcon>
                <BenefitTitle>
                  Полная оплата только после получения товара
                </BenefitTitle>
              </Benefit>
              <Benefit benefitIndex={3}>
                <BenefitIcon>
                  <Icon.Settings />
                </BenefitIcon>
                <BenefitTitle>Собственное уникальное производство</BenefitTitle>
              </Benefit>
            </Benefits>
          </BenefitsMotionWrapper>
        </AppearingContainer>
        <AppearingContainer
          className='overflow-visible py-36 before:inset-x-[40%] before:inset-y-[20%]'
          padding='none'
          gradient='to-top'
        >
          <div className='flex flex-col items-center space-y-6 overflow-hidden px-container-sm md:space-y-12 md:px-container-md lg:px-container-lg xl:px-container'>
            <Heading className='mb-12 self-start' as='h2'>
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
        </AppearingContainer>
        <AppearingContainer>
          <Heading className='mb-12' as='h2'>
            Какие цвета <GradientText>неона</GradientText> у нас есть
          </Heading>
          <span className='mb-16 text-base md:text-xl lg:text-3xl'>
            Создайте неоновую ленту на свой вкус, опробуйте основные функции
            всех типов неона, задав необходимые параметры и выбрав свой цвет.
          </span>
          <Constructor />
        </AppearingContainer>
      </ScrollBlurContainer>
      <ScrollBlurContainer
        scrollOptions={{ offset: ['80% start', 'end start'] }}
        isAlternate
      >
        <PricesMotionWrapper className='mt-28'>
          <Heading className='mb-12' as='h2'>
            Сколько стоит <GradientText>неоновая вывеска?</GradientText>
          </Heading>
          <div className='grid grid-cols-[minmax(0,0.33fr)_minmax(0,0.66fr)] gap-x-20'>
            <div className='relative [perspective:1000px]'>
              {prices.map((item, index) => (
                <PriceCard key={index} index={index} maxCount={prices.length}>
                  <PriceCardNumber>0{index + 1}</PriceCardNumber>
                  <PriceCardDots index={index} maxCount={prices.length} />
                  <PriceCardText>{item.text}</PriceCardText>
                </PriceCard>
              ))}
            </div>
            <div className='flex flex-col items-center justify-center gap-y-12'>
              <Price prices={[12600, 11600, 10600, 9600]} />
              <Button className='w-fit' variant='gradient'>
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </PricesMotionWrapper>
        <Container
          className='flex h-[135vh] flex-col justify-center space-y-12 pb-16'
          padding='none'
          isAlternate
        >
          <Heading className='mb-12' as='h2'>
            Отзывы <GradientText>наших клиентов</GradientText>
          </Heading>
          <Comments>
            <CommentsHeader>
              <span className='self-end'>Средний рейтинг:</span>
              <Button
                variant='gradient'
                className='row-span-2 w-fit justify-self-end'
              >
                Оставить отзыв
              </Button>
              <div className='flex items-center gap-x-6 self-start'>
                {commentsAverageRating} из 5
                <CommentsStars rating={5} />
              </div>
            </CommentsHeader>
            <CommentsCarousel>
              {comments.map((item, index) => (
                <Comment key={index}>
                  <CommentAuthor>
                    <CommentAuthorAvatar>{item.author}</CommentAuthorAvatar>
                    <CommentAuthorDate>{item.date}</CommentAuthorDate>
                    <CommentsStars rating={item.rating} />
                    {item.author}
                  </CommentAuthor>
                  <CommentContent>
                    <CommentNaming>{item.commentNaming}</CommentNaming>
                    {item.comment}
                    {item.commentImageSrc && (
                      <CommentImage
                        src={item.commentImageSrc}
                        alt={item.commentNaming}
                        width={item.commentImageWidth}
                        height={item.commentImageHeight}
                      />
                    )}
                  </CommentContent>
                </Comment>
              ))}
            </CommentsCarousel>
          </Comments>
        </Container>
      </ScrollBlurContainer>
      <AppearingContainer className='pt-36'>
        <Heading className='mb-12' as='h2'>
          Вопросы от <GradientText>наших клиентов</GradientText>
        </Heading>
        <Accordion
          className='grid grid-cols-1 gap-x-20 gap-y-12'
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
      </AppearingContainer>
    </Main>
  );
}
