import React from 'react';

import { comments, commentsAverageRating } from '@/config/home/comments';
import { faqQuestions } from '@/config/home/faq';
import { prices } from '@/config/home/prices';
import { works } from '@/config/home/works';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AppearingContainer } from '@/components/ui/appearing-container';
import { AppearingAnimationText } from '@/components/ui/appearing-text/appearing-animation-text';
import { AppearingAnimationTextPart } from '@/components/ui/appearing-text/appearing-animation-text-part';
import { AppearingContentText } from '@/components/ui/appearing-text/appearing-content-text';
import { AppearingText } from '@/components/ui/appearing-text/appearing-text';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Icon from '@/components/ui/icon';
import { Main } from '@/components/ui/main';
import { ScrollBlurContainer } from '@/components/ui/scroll-blur-container';
import { Separator } from '@/components/ui/separator';
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
import { CommentNaming } from '@/app/(home)/_components/comments/comment-naming';
import { Comments } from '@/app/(home)/_components/comments/comments';
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
        className='h-screen justify-center overflow-hidden'
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
                  вывески на
                </AppearingAnimationTextPart>
                <br />
                <AppearingAnimationTextPart>
                  заказ&nbsp;<GradientText>за 3 дня</GradientText>
                </AppearingAnimationTextPart>
              </AppearingAnimationText>
              <AppearingContentText>
                <span className='relative z-10'>
                  Неоновые <br />
                  вывески на <br />
                  заказ
                </span>{' '}
                <GradientText>за 3 дня</GradientText>
              </AppearingContentText>
            </AppearingText>
          </Heading>
          <div className='flex flex-wrap justify-start gap-x-5 gap-y-12 overflow-hidden md:flex-nowrap md:justify-center md:gap-x-10'>
            <OrderModalTrigger
              className='order-1 w-full delay-1500 duration-1000 animate-in slide-in-from-bottom-full fill-mode-both md:order-none md:w-auto'
              variant='gradient'
            >
              Рассчитать стоимость
            </OrderModalTrigger>
            <Separator
              className='z-10 h-auto bg-background'
              orientation='vertical'
            />
            <HeroBenefitText />
          </div>
          <div className='z-10 mt-10 hidden flex-col items-center justify-center gap-y-3 opacity-100 delay-1500 duration-1000 animate-in fade-in-0 fill-mode-both md:flex '>
            <Icon.MouseScroll className='h-10 w-7' />
            <span className='font-poppins text-sm font-semibold'>Scroll</span>
          </div>
          <div className='absolute top-0 h-[200vh] w-[30vw] animate-hero-overlay-mobile bg-foreground mix-blend-overlay md:w-[13vw] md:animate-hero-overlay' />
        </AppearingContainer>
      </ScrollBlurContainer>
      <ScrollBlurContainer
        className='pb-36'
        padding='none'
        scrollOptions={{ offset: ['70% start', 'end start'] }}
      >
        <div className='space-y-16 bg-background'>
          <AppearingContainer
            className='gap-y-6 pt-10'
            padding='none'
            transition={{ staggerChildren: 0.2 }}
          >
            <Heading className='-mb-4' as='h2' padding='container'>
              Хватит быть в тени закажи вывеску из{' '}
              <GradientText>неона</GradientText>
            </Heading>
            <Benefits>
              <BenefitsContent>
                <Benefit>
                  <BenefitIcon>
                    <Icon.Gift />
                  </BenefitIcon>
                  <BenefitTitle>
                    Дизайн-макет с расчетом стоимости{' '}
                    <strong className='font-bold uppercase'>бесплатно</strong>
                  </BenefitTitle>
                </Benefit>
                <Benefit>
                  <BenefitIcon>
                    <Icon.Lightning />
                  </BenefitIcon>
                  <BenefitTitle>
                    Срочные заказы изготовим за{' '}
                    <strong className='font-bold uppercase'>1 день</strong>
                  </BenefitTitle>
                </Benefit>
                <Benefit>
                  <BenefitIcon>
                    <Icon.CreditCard />
                  </BenefitIcon>
                  <BenefitTitle>
                    Полная оплата только после{' '}
                    <strong className='font-bold uppercase'>получения</strong>{' '}
                    товара
                  </BenefitTitle>
                </Benefit>
                <Benefit>
                  <BenefitIcon>
                    <Icon.Settings />
                  </BenefitIcon>
                  <BenefitTitle>
                    <strong className='font-bold uppercase'>Собственное</strong>{' '}
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
                    </strong>{' '}
                    гибкий неон и комплектующие
                  </BenefitTitle>
                </Benefit>
                <Benefit>
                  <BenefitIcon>
                    <Icon.Check />
                  </BenefitIcon>
                  <BenefitTitle>
                    Вкусные скидки для{' '}
                    <strong className='font-bold uppercase'>оптовых</strong>{' '}
                    клиентов
                  </BenefitTitle>
                </Benefit>
              </BenefitsContent>
            </Benefits>
          </AppearingContainer>
          <AppearingContainer
            className='overflow-visible before:inset-x-[20%] before:inset-y-1/4 md:before:inset-x-[30%] md:before:inset-y-[20%] lg:py-36 lg:before:inset-x-[40%] lg:before:inset-y-[30%]'
            padding='none'
            gradient='to-top'
          >
            <div className='flex flex-col items-center overflow-hidden px-container-sm md:space-y-12 md:px-container-md lg:px-container-lg xl:px-container'>
              <Heading className='mb-12 self-start' as='h2'>
                Самые <GradientText>сочные</GradientText> работы
              </Heading>
              <AppearingContainer
                className='relative w-4/5 bg-transparent md:w-3/5 lg:w-2/5'
                padding='none'
                variant='child'
                transition={{ delay: 0.5, duration: 1 }}
              >
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
              </AppearingContainer>
            </div>
          </AppearingContainer>
          <AppearingContainer
            className='pt-8'
            transition={{ delayChildren: 0.3 }}
          >
            <Heading className='mb-8' as='h2'>
              Какие <GradientText>цвета неона</GradientText> у нас есть
            </Heading>
            <span className='mb-16 text-base md:text-xl lg:text-2xl'>
              Создайте неоновую ленту на свой вкус, опробуйте основные функции
              всех типов неона, задав необходимые параметры и выбрав свой цвет.
            </span>
            <Constructor />
          </AppearingContainer>
        </div>
      </ScrollBlurContainer>
      <ScrollBlurContainer
        scrollOptions={{ offset: ['80% start', 'end start'] }}
        isAlternate
      >
        <PricesMotionWrapper className='-mt-12 md:mt-12'>
          <Heading className='mb-12' as='h2'>
            Сколько стоит <GradientText>неоновая вывеска?</GradientText>
          </Heading>
          <AppearingContainer
            className='grid grow-0 grid-rows-[minmax(0,1fr)_min-content] gap-x-20 gap-y-6 bg-transparent lg:grid-cols-2 2xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'
            padding='none'
            transition={{ delay: 0.3, delayChildren: 0.3 }}
          >
            <AppearingContainer
              className='relative bg-transparent [perspective:1000px]'
              variant='child'
              padding='none'
            >
              {prices.map((item, index) => (
                <PriceCard key={index} index={index} maxCount={prices.length}>
                  <PriceCardNumber>0{index + 1}</PriceCardNumber>
                  <PriceCardDots index={index} maxCount={prices.length} />
                  <PriceCardText>{item.text}</PriceCardText>
                </PriceCard>
              ))}
            </AppearingContainer>
            <AppearingContainer
              className='flex flex-col justify-start gap-y-6 bg-transparent md:justify-center md:gap-y-8 lg:items-center lg:gap-y-12'
              variant='child'
              padding='none'
            >
              <Price
                prices={[18000, 16000, 14000, 12000]}
                discountedPrices={[12600, 11600, 10600, 9600]}
              />
              <Button className='w-full lg:w-fit' variant='gradient'>
                Рассчитать стоимость
              </Button>
            </AppearingContainer>
          </AppearingContainer>
        </PricesMotionWrapper>
        <AppearingContainer
          className='flex flex-col justify-center pb-32 pt-0'
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
                className='order-1 row-span-2 w-full justify-self-end md:order-none md:w-fit'
              >
                Оставить отзыв
              </Button>
              <div className='-mt-1 flex items-center gap-x-6 self-start md:mt-0'>
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
        </AppearingContainer>
      </ScrollBlurContainer>
      <div className='relative z-10 bg-background'>
        <AppearingContainer
          className='pt-10'
          transition={{ delayChildren: 0.3, staggerChildren: 0.3 }}
        >
          <Heading className='mb-12' as='h2'>
            Вопросы от <GradientText>наших клиентов</GradientText>
          </Heading>
          <Accordion
            className='grid grid-cols-1 gap-x-20 gap-y-12'
            type='multiple'
            defaultValue={faqQuestions.map((item) => item.value)}
          >
            {faqQuestions.map((item, index) => (
              <AppearingContainer
                key={index}
                className='flex flex-col gap-y-12 bg-transparent'
                variant='child'
                padding='none'
              >
                <AccordionItem key={index} value={item.value}>
                  <AccordionTrigger className='text-start text-xl'>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </AppearingContainer>
            ))}
          </Accordion>
        </AppearingContainer>
      </div>
    </Main>
  );
}
