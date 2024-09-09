import type { Metadata, Viewport } from 'next';

import React, { Suspense } from 'react';

import Script from 'next/script';

import { Footer } from '@/app/_components/footer/footer';
import { ScreenIndicator } from '@/app/_components/indicators/screen-indicator';
import { LenisProvider } from '@/app/_components/lenis-provider';
import { PathnameBody } from '@/app/_components/pathname-body';
import { YandexMapProvider } from '@/components/shared/yandex-map-provider';
import { Toaster } from '@/components/ui/sonner';
import { api } from '@/config/api';
import { siteConfig } from '@/config/site';
import { Poppins, Unbounded } from 'next/font/google';

import { env } from '@/lib/env';
import { cn } from '@/lib/utils';

import { Header } from './_components/header/header';
import { FPSIndicator } from './_components/indicators/fps-indicator';
import { MemoryIndicator } from './_components/indicators/memory-indicator';
import { YandexMetrika } from './_components/yandex-metrika';
import Loading from './loading';

import './globals.css';

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['400', '500', '600', '700', '800']
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800']
});

export const defaultOpenGraph: Metadata['openGraph'] = {
  description: siteConfig.ogDescription,
  images: siteConfig.ogImages,
  locale: 'ru_RU',
  title: {
    default: siteConfig.ogNaming,
    template: `${siteConfig.ogNaming} - %s`
  },
  type: 'website',
  url: siteConfig.url
};

export const defaultTwitter: Metadata['twitter'] = {
  card: 'summary_large_image',
  description: siteConfig.description,
  images: [siteConfig.ogImage],
  title: {
    default: siteConfig.naming,
    template: `${siteConfig.naming} - %s`
  }
};

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url
  },
  description: siteConfig.description,
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
    shortcut: '/favicon.ico'
  },
  keywords: siteConfig.keywords,
  manifest: '/manifest.webmanifest',
  metadataBase: new URL(siteConfig.url),
  openGraph: defaultOpenGraph,
  title: {
    default: siteConfig.naming,
    template: `${siteConfig.naming} - %s`
  },
  twitter: defaultTwitter,
  verification: {
    yandex: env.YANDEX_VERIFICATION_CODE
  }
};

export const viewport: Viewport = {
  maximumScale: 1,
  minimumScale: 1,
  themeColor: 'black',
  userScalable: false
};

export default function RootLayout({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <Script id='metrika-counter' strategy='afterInteractive'>
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${env.YANDEX_METRIKA_ID}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
          });`}
      </Script>
      <Script id='schema-base' type='application/ld+json'>
        {`
          {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "@id": "${siteConfig.url}",
            "name": "${siteConfig.naming}",
            "url": "${siteConfig.url}",
            "telephone": "${siteConfig.phone}",
            "openingHours": "${siteConfig.workTime}",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ${JSON.stringify(siteConfig.workTimeSpecification.dayOfWeek)},
              "opens": "${siteConfig.workTimeSpecification.opens}",
              "closes": "${siteConfig.workTimeSpecification.closes}"
            },
            "sameAs": [
              ${JSON.stringify(siteConfig.social.map((social) => `"${social.href}"`))},
            ],
            "email": "${siteConfig.email}",
            "currenciesAccepted": "RUB",
            "priceRange": "от 1490 RUB",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "${siteConfig.addressStreet}",
              "addressLocality": "${siteConfig.addressCity}",
              "addressRegion": "${siteConfig.addressRegion}",
              "postalCode": "${siteConfig.addressPostalCode}",
              "addressCountry": "Россия"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "16"
            }
          }
        `}
      </Script>
      <LenisProvider root>
        <PathnameBody
          className={cn(
            'min-h-screen w-screen overflow-x-hidden text-foreground antialiased',
            unbounded.variable,
            poppins.variable,
            unbounded.className
          )}
        >
          <YandexMapProvider apiUrl={api.yMapsApiUrl}>
            {/* <SplashScreenWrapper> */}
            <Suspense fallback={<Loading />}>
              <YandexMetrika id={env.YANDEX_METRIKA_ID} />
              <Header />
              {children}
              <Footer />
            </Suspense>
            {/* </SplashScreenWrapper> */}
          </YandexMapProvider>
          <Toaster />
          {/* <MouseFollower /> */}
          <ScreenIndicator />
          <FPSIndicator />
          <MemoryIndicator />
        </PathnameBody>
      </LenisProvider>
    </html>
  );
}
