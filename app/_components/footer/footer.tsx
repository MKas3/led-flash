import React from 'react';

import { FooterForm } from '@/app/_components/footer/footer-form';
import { AppearingAnimationText } from '@/components/ui/appearing-text/appearing-animation-text';
import { AppearingAnimationTextPart } from '@/components/ui/appearing-text/appearing-animation-text-part';
import { AppearingContentText } from '@/components/ui/appearing-text/appearing-content-text';
import { AppearingText } from '@/components/ui/appearing-text/appearing-text';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import Link from '@/components/ui/link';
import { resourcesHrefs } from '@/config/resources';
import { siteConfig } from '@/config/site';

import { cn } from '@/lib/utils';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <>
      <footer
        className={cn(
          `relative z-10 w-full bg-background px-footer-sm pb-32 pt-16 text-center lg:px-footer-lg md:px-footer-md xl:px-footer`,
          className
        )}
        {...props}
      >
        <Heading as='h2'>
          <AppearingText>
            <AppearingAnimationText animate={false} viewport={{ once: true }} whileInView='animate-appearing'>
              <AppearingAnimationTextPart>
                Готовы
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                создать
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                красоту
              </AppearingAnimationTextPart>
              <br className='hidden md:block' />
              <AppearingAnimationTextPart>
                для
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                <GradientText className='to-[200%]'>вашего</GradientText>
              </AppearingAnimationTextPart>
              {' '}
              <AppearingAnimationTextPart>
                <GradientText className='from-[-100%]'>бизнеса?</GradientText>
              </AppearingAnimationTextPart>
            </AppearingAnimationText>
            <AppearingContentText>
              Готовы создать красоту
              {' '}
              <br className='hidden md:block' />
              для
              {' '}
              <GradientText>вашего бизнеса?</GradientText>
            </AppearingContentText>
          </AppearingText>
        </Heading>
        <FooterForm className='mt-16' />
        <div className='mt-20 flex flex-wrap items-center justify-center gap-4 whitespace-nowrap px-10 text-xl font-bold md:gap-8 md:text-3xl lg:gap-12 lg:text-5xl'>
          <Link.Phone />
          <Link.Email />
        </div>
        <div className='mt-12 flex items-center justify-center gap-x-5 font-poppins text-xs font-semibold text-white/50 *:underline *:underline-offset-4 md:gap-x-8 md:text-xl lg:gap-x-10 lg:text-3xl'>
          {siteConfig.social.map((item, index) => (
            <Link.Link key={index} href={item.href}>
              {item.naming}
            </Link.Link>
          ))}
        </div>
      </footer>
      <div
        className='relative z-10 flex h-screen w-full items-center justify-center bg-[length:100%_100%]'
        style={{
          backgroundImage: `url(${resourcesHrefs.footerBackgroundGradient})`
        }}
      >
        <Link.Xerase />
      </div>
    </>
  );
};
