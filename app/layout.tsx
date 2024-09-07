import type { Metadata, Viewport } from 'next';

import React, { Suspense } from 'react';

import { Footer } from '@/app/_components/footer/footer';
import { MotionHeader } from '@/app/_components/header/motion-header';
import { ScreenIndicator } from '@/app/_components/indicators/screen-indicator';
import { LenisProvider } from '@/app/_components/lenis-provider';
import { PathnameBody } from '@/app/_components/pathname-body';
import { YandexMapProvider } from '@/components/shared/yandex-map-provider';
import { Toaster } from '@/components/ui/sonner';
import { api } from '@/config/api';
import { siteConfig } from '@/config/site';
import { Poppins, Unbounded } from 'next/font/google';

import { cn } from '@/lib/utils';

import { FPSIndicator } from './_components/indicators/fps-indicator';
import { MemoryIndicator } from './_components/indicators/memory-indicator';
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

export const metadata: Metadata = {
  description: siteConfig.description,
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
    shortcut: '/favicon.ico'
  },
  keywords: ['led', 'led-flash', 'neon'],
  manifest: '/manifest.webmanifest',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: siteConfig.naming,
        height: 443,
        url: siteConfig.ogImage,
        width: 847
      }
    ],
    locale: 'ru_RU',
    title: siteConfig.naming,
    type: 'website',
    url: siteConfig.url
  },
  title: {
    default: siteConfig.naming,
    template: `%s - ${siteConfig.naming}`
  },
  twitter: {
    card: 'summary_large_image',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    title: siteConfig.naming
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
    <html lang='en' suppressHydrationWarning>
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
              <MotionHeader />
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
