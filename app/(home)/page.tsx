import type { Metadata } from 'next';

import React from 'react';

import { OrderModalTrigger } from '@/app/_components/order-modal/order-modal-trigger';
import { Benefit } from '@/app/(home)/_components/benefits/benefit';
import { BenefitIcon } from '@/app/(home)/_components/benefits/benefit-icon';
import { BenefitTitle } from '@/app/(home)/_components/benefits/benefit-title';
import { Benefits } from '@/app/(home)/_components/benefits/benefits';
import { BenefitsContent } from '@/app/(home)/_components/benefits/benefits-content';
import { Comment } from '@/app/(home)/_components/comments/comment';
import { CommentAuthor } from '@/app/(home)/_components/comments/comment-author';
import { CommentAuthorAvatar } from '@/app/(home)/_components/comments/comment-author-avatar';
import { CommentAuthorDate } from '@/app/(home)/_components/comments/comment-author-date';
import { CommentContent } from '@/app/(home)/_components/comments/comment-content';
import { CommentImage } from '@/app/(home)/_components/comments/comment-image';
import { Comments } from '@/app/(home)/_components/comments/comments';
import { CommentsAddModal } from '@/app/(home)/_components/comments/comments-add-modal';
import { CommentsAddModalTrigger } from '@/app/(home)/_components/comments/comments-add-modal-trigger';
import { CommentsCarousel } from '@/app/(home)/_components/comments/comments-carousel';
import { CommentsHeader } from '@/app/(home)/_components/comments/comments-header';
import { CommentsStars } from '@/app/(home)/_components/comments/comments-stars';
import { Constructor } from '@/app/(home)/_components/constructor/constructor';
import { HeroBenefitText } from '@/app/(home)/_components/hero-benefit-text';
import { Price } from '@/app/(home)/_components/price/price';
import { PriceCard } from '@/app/(home)/_components/price/price-card';
import { PriceCardDots } from '@/app/(home)/_components/price/price-card-dots';
import { PriceCardNumber } from '@/app/(home)/_components/price/price-card-number';
import { PriceCardText } from '@/app/(home)/_components/price/price-card-text';
import { PricesMotionWrapper } from '@/app/(home)/_components/price/prices-motion-wrapper';
import { Cases } from '@/app/cases/_components/cases';
import { Contact } from '@/components/shared/contact';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AnchorLink } from '@/components/ui/anchor-link';
import { AppearingContainer } from '@/components/ui/appearing-container';
import { AppearingAnimationText } from '@/components/ui/appearing-text/appearing-animation-text';
import { AppearingAnimationTextPart } from '@/components/ui/appearing-text/appearing-animation-text-part';
import { AppearingContentText } from '@/components/ui/appearing-text/appearing-content-text';
import { AppearingText } from '@/components/ui/appearing-text/appearing-text';
import { buttonVariants } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Icon from '@/components/ui/icon';
import Link from '@/components/ui/link';
import { Main } from '@/components/ui/main';
import { ScrollBlurContainer } from '@/components/ui/scroll-blur-container';
import { Separator } from '@/components/ui/separator';
import { comments, commentsAverageRating } from '@/config/home/comments';
import { faqQuestions } from '@/config/home/faq';
import { prices } from '@/config/home/prices';

import { cn } from '@/lib/utils';

import { defaultOpenGraph, defaultTwitter } from '../layout';

import { CommentText } from './_components/comments/comment-text';

export const metadata: Metadata = {
  openGraph: { ...defaultOpenGraph, title: 'Led Flash - Неоновые вывески для бизнеса от 1490 руб.' },
  title: 'Неоновые вывески для бизнеса от 1490 руб.',
  twitter: { ...defaultTwitter, title: 'Led Flash - Неоновые вывески для бизнеса от 1490 руб.' }
};

export default function HomePage() {
  return (
    <Main>
      <ScrollBlurContainer
        className='h-screen justify-center overflow-hidden'
        isAlternate
        isHero
      >
        <AppearingContainer
          className='flex flex-col justify-center gap-y-12 bg-transparent'
          padding='none'
        >
          <Heading className='md:mt-24' as='h1'>
            <AppearingText>
              <AppearingAnimationText>
                <AppearingAnimationTextPart>
                  Неоновые
                </AppearingAnimationTextPart>
                <br />
                <AppearingAnimationTextPart>
                  вывески
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  на
                </AppearingAnimationTextPart>
                <br />
                <AppearingAnimationTextPart>
                  заказ
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  <GradientText className='to-[300%]'>за</GradientText>
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  <GradientText className='from-[-100%] to-[200%]'>3</GradientText>
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  <GradientText className='from-[-200%]'>дня</GradientText>
                </AppearingAnimationTextPart>
              </AppearingAnimationText>
              <AppearingContentText>
                <span className='relative z-10'>
                  Неоновые
                  {' '}
                  <br />
                  вывески на
                  {' '}
                  <br />
                  заказ
                </span>
                {' '}
                <GradientText>за 3 дня</GradientText>
              </AppearingContentText>
            </AppearingText>
          </Heading>
          <div className='flex flex-wrap justify-start gap-x-5 gap-y-12 overflow-hidden pt-3 md:flex-nowrap md:gap-x-10 lg:ml-[10vw]'>
            <span className='order-1 w-full transition-opacity hover:opacity-90 md:order-none md:w-auto'>
              <OrderModalTrigger
                className={cn(
                  buttonVariants({ variant: 'gradient' }),
                  `w-full delay-1000 duration-700 animate-in slide-in-from-bottom-[105%] fill-mode-both md:w-auto`
                )}
              >
                Оформить заявку
              </OrderModalTrigger>
            </span>
            <div className='overflow-hidden'>
              <Separator
                className='z-10 h-full w-0.5 bg-background delay-1500 duration-1000 animate-in slide-in-from-bottom-full fill-mode-both'
                orientation='vertical'
              />
            </div>
            <HeroBenefitText />
          </div>
          <AnchorLink className='z-10 mx-auto mt-10 hidden w-fit flex-col items-center justify-center gap-y-3 opacity-100 transition-opacity delay-1500 duration-1000 animate-in fade-in-0 fill-mode-both hover:opacity-75 md:flex' href={600}>
            <Icon.MouseScroll className='h-10 w-7' />
            <span className='font-poppins text-sm font-semibold'>Scroll</span>
          </AnchorLink>
          <div className='pointer-events-none absolute top-0 h-[200vh] w-[30vw] animate-hero-overlay-mobile bg-foreground mix-blend-overlay md:w-[13vw] md:animate-hero-overlay' />
        </AppearingContainer>
      </ScrollBlurContainer>
      <ScrollBlurContainer padding='none'>
        <div className='space-y-16 bg-background'>
          <AppearingContainer
            className='gap-y-6 pt-10'
            padding='none'
            transition={{ staggerChildren: 0.2 }}
          >
            <Heading className='-mb-4' as='h2' padding='container'>
              <AppearingText>
                <AppearingAnimationText animate={false} viewport={{ once: true }} whileInView='animate-appearing'>
                  <AppearingAnimationTextPart>
                    Хватит
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    быть
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    в
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    тени
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    закажи
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    вывеску
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    из
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    <GradientText>неона</GradientText>
                  </AppearingAnimationTextPart>
                </AppearingAnimationText>
                <AppearingContentText>
                  Хватит быть в тени закажи вывеску из
                  {' '}
                  <GradientText>неона</GradientText>
                </AppearingContentText>
              </AppearingText>
            </Heading>
            <Benefits>
              <BenefitsContent>
                <Benefit>
                  <BenefitIcon>
                    <Icon.Gift />
                  </BenefitIcon>
                  <BenefitTitle>
                    Дизайн-макет с расчетом стоимости
                    {' '}
                    <strong className='font-bold uppercase'>бесплатно</strong>
                  </BenefitTitle>
                </Benefit>
                <Benefit>
                  <BenefitIcon>
                    <Icon.Lightning />
                  </BenefitIcon>
                  <BenefitTitle>
                    Срочные заказы изготовим за
                    {' '}
                    <strong className='font-bold uppercase'>1 день</strong>
                  </BenefitTitle>
                </Benefit>
                <Benefit>
                  <BenefitIcon>
                    <Icon.CreditCard />
                  </BenefitIcon>
                  <BenefitTitle>
                    Полная оплата только после
                    {' '}
                    <strong className='font-bold uppercase'>получения</strong>
                    {' '}
                    товара
                  </BenefitTitle>
                </Benefit>
                <Benefit>
                  <BenefitIcon>
                    <Icon.Settings />
                  </BenefitIcon>
                  <BenefitTitle>
                    <strong className='font-bold uppercase'>Собственное</strong>
                    {' '}
                    уникальное производство
                  </BenefitTitle>
                </Benefit>
                <Benefit>
                  <BenefitIcon>
                    <Icon.Leaf />
                  </BenefitIcon>
                  <BenefitTitle>
                    <strong className='font-bold uppercase'>
                      Качественный
                    </strong>
                    {' '}
                    гибкий неон и комплектующие
                  </BenefitTitle>
                </Benefit>
                <Benefit>
                  <BenefitIcon>
                    <Icon.Check />
                  </BenefitIcon>
                  <BenefitTitle>
                    Вкусные скидки для
                    {' '}
                    <strong className='font-bold uppercase'>оптовых</strong>
                    {' '}
                    клиентов
                  </BenefitTitle>
                </Benefit>
              </BenefitsContent>
            </Benefits>
          </AppearingContainer>
          <AppearingContainer
            className='overflow-visible lg:pt-36'
            gradient='none'
            padding='none'
          >
            <div className='flex flex-col items-center overflow-hidden px-container-sm md:px-container-md lg:px-container-lg xl:px-container'>
              <Heading className='mb-12 self-start' as='h2'>
                <AppearingText>
                  <AppearingAnimationText animate={false} viewport={{ once: true }} whileInView='animate-appearing'>
                    <AppearingAnimationTextPart>
                      Самые
                    </AppearingAnimationTextPart>
                    {' '}
                    <AppearingAnimationTextPart>
                      <GradientText>сочные</GradientText>
                    </AppearingAnimationTextPart>
                    {' '}
                    <AppearingAnimationTextPart>
                      работы
                    </AppearingAnimationTextPart>
                  </AppearingAnimationText>
                  <AppearingContentText>
                    Самые
                    {' '}
                    <GradientText>сочные</GradientText>
                    {' '}
                    работы
                  </AppearingContentText>
                </AppearingText>
              </Heading>
              <AppearingContainer
                className='bg-transparent pt-10'
                padding='none'
                transition={{ delay: 0.5, duration: 1 }}
                variant='child'
              >
                <Cases disableMouse />
              </AppearingContainer>
            </div>
          </AppearingContainer>
          <AppearingContainer
            className='pb-48 pt-8 md:pt-0'
            transition={{ delayChildren: 0.3 }}
          >
            <Heading className='mb-8' as='h2'>
              <AppearingText>
                <AppearingAnimationText animate={false} viewport={{ once: true }} whileInView='animate-appearing'>
                  <AppearingAnimationTextPart>
                    Какие
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    <GradientText className='to-[200%]'>цвета</GradientText>
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    <GradientText className='from-[-100%]'>неона</GradientText>
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    у
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    нас
                  </AppearingAnimationTextPart>
                  {' '}
                  <AppearingAnimationTextPart>
                    есть
                  </AppearingAnimationTextPart>
                </AppearingAnimationText>
                <AppearingContentText>
                  Какие
                  {' '}
                  <GradientText>цвета неона</GradientText>
                  {' '}
                  у нас есть
                </AppearingContentText>
              </AppearingText>
            </Heading>
            <span className='mb-16 text-base md:text-xl lg:text-2xl'>
              Создайте неоновую ленту на свой вкус, опробуйте основные функции
              всех типов неона, задав необходимые параметры и выбрав свой цвет.
            </span>
            <Constructor />
          </AppearingContainer>
        </div>
      </ScrollBlurContainer>
      <ScrollBlurContainer isAlternate>
        <PricesMotionWrapper className='md:mt-12'>
          <Heading className='mb-12' as='h2'>
            <AppearingText>
              <AppearingAnimationText animate={false} viewport={{ once: true }} whileInView='animate-appearing'>
                <AppearingAnimationTextPart>
                  Сколько
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  стоит
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  <GradientText className='to-[200%]'>неоновая</GradientText>
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  <GradientText className='from-[-100%]'>вывеска?</GradientText>
                </AppearingAnimationTextPart>
              </AppearingAnimationText>
              <AppearingContentText>
                Сколько стоит
                {' '}
                <GradientText>неоновая вывеска?</GradientText>
              </AppearingContentText>
            </AppearingText>
          </Heading>
          <AppearingContainer
            className='grid grow-0 grid-rows-[minmax(0,1fr)_min-content] gap-x-20 gap-y-6 bg-transparent lg:grid-cols-2 2xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'
            padding='none'
            transition={{ delay: 0.3, delayChildren: 0.3 }}
          >
            <AppearingContainer
              className='relative bg-transparent [perspective:1000px]'
              padding='none'
              variant='child'
            >
              {prices.map((item, index) => (
                <PriceCard key={index} index={index} maxCount={prices.length}>
                  <PriceCardNumber>
                    0
                    {index + 1}
                  </PriceCardNumber>
                  <PriceCardDots index={index} maxCount={prices.length} />
                  <PriceCardText>{item.text}</PriceCardText>
                </PriceCard>
              ))}
            </AppearingContainer>
            <AppearingContainer
              className='flex flex-col justify-start gap-y-6 bg-transparent md:justify-center md:gap-y-8 lg:items-center lg:gap-y-12'
              padding='none'
              variant='child'
            >
              <Price
                discountedPrices={[12600, 14600, 16600, 18600]}
                prices={[18000, 20000, 22000, 24000]}
              />
              <Link.Calculator
                className={cn(
                  buttonVariants({ variant: 'gradient' }),
                  `w-full lg:w-fit`
                )}
              >
                Рассчитать стоимость
              </Link.Calculator>
            </AppearingContainer>
          </AppearingContainer>
        </PricesMotionWrapper>
        <AppearingContainer
          className='flex flex-col justify-center pb-96 pt-0'
          padding='none'
          isAlternate
        >
          <Heading className='mb-12' as='h2'>
            <AppearingText>
              <AppearingAnimationText animate={false} viewport={{ once: true }} whileInView='animate-appearing'>
                <AppearingAnimationTextPart>
                  Отзывы
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  <GradientText className='to-[200%]'>наших</GradientText>
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  <GradientText className='from-[-100%]'>клиентов</GradientText>
                </AppearingAnimationTextPart>
              </AppearingAnimationText>
              <AppearingContentText>
                Отзывы
                {' '}
                <GradientText>наших клиентов</GradientText>
              </AppearingContentText>
            </AppearingText>
          </Heading>
          <Comments>
            <CommentsHeader>
              <span className='self-end'>Средний рейтинг:</span>
              <CommentsAddModal>
                <CommentsAddModalTrigger
                  className='order-1 row-span-2 w-full justify-self-end md:order-none md:w-fit'
                  variant='gradient'
                >
                  Оставить отзыв
                </CommentsAddModalTrigger>
              </CommentsAddModal>
              <div className='-mt-1 flex items-center gap-x-6 self-start md:mt-0'>
                {commentsAverageRating}
                {' '}
                из 5
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
                    <CommentText>{item.comment}</CommentText>
                    {item.commentImageSrc && (
                      <CommentImage
                        alt='Картинка отзыва'
                        height={item.commentImageHeight}
                        sizes='(max-width: 768px) 15vw, 10vw'
                        src={item.commentImageSrc}
                        width={item.commentImageWidth}
                      />
                    )}
                  </CommentContent>
                </Comment>
              ))}
            </CommentsCarousel>
          </Comments>
        </AppearingContainer>
      </ScrollBlurContainer>
      <div className='relative z-10 bg-background'>
        <AppearingContainer
          className='pt-10'
          transition={{ delayChildren: 0.3, staggerChildren: 0.3 }}
        >
          <Heading className='mb-12' as='h2'>
            <AppearingText>
              <AppearingAnimationText animate={false} viewport={{ once: true }} whileInView='animate-appearing'>
                <AppearingAnimationTextPart>
                  Вопросы
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  от
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  <GradientText className='to-[200%]'>наших</GradientText>
                </AppearingAnimationTextPart>
                {' '}
                <AppearingAnimationTextPart>
                  <GradientText className='from-[-100%]'>клиентов</GradientText>
                </AppearingAnimationTextPart>
              </AppearingAnimationText>
              <AppearingContentText>
                Вопросы от
                {' '}
                <GradientText>наших клиентов</GradientText>
              </AppearingContentText>
            </AppearingText>
          </Heading>
          <Accordion
            className='grid grid-cols-1 gap-x-20 gap-y-12'
            defaultValue={[]}
            type='multiple'
          >
            {faqQuestions.map((item, index) => (
              <AppearingContainer
                key={index}
                className='flex flex-col gap-y-12 bg-transparent'
                padding='none'
                variant='child'
              >
                <AccordionItem key={index} value={item.value}>
                  <AccordionTrigger className='text-start text-xl'>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className='whitespace-pre-wrap'>{item.answer}</AccordionContent>
                </AccordionItem>
              </AppearingContainer>
            ))}
          </Accordion>
        </AppearingContainer>
      </div>
      <Contact />
    </Main>
  );
}
