import type { Metadata, Viewport } from 'next';

import React from 'react';

import { Footer } from '@/app/_components/footer/footer';
import { MotionHeader } from '@/app/_components/header/motion-header';
import { LenisProvider } from '@/app/_components/lenis-provider';
import { ScreenIndicator } from '@/app/_components/screen-indicator';
import { SplashScreenWrapper } from '@/app/_components/splash-screen-wrapper';
import { YandexMapProvider } from '@/components/shared/yandex-map-provider';
import { Toaster } from '@/components/ui/sonner';
import { api } from '@/config/api';
import { siteConfig } from '@/config/site';
import { Poppins, Unbounded } from 'next/font/google';

import { cn } from '@/lib/utils';

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
      <body
        className={cn(
          'min-h-screen group/loading w-screen overflow-x-hidden bg-foreground text-foreground antialiased [&[data-scroll-locked]]:!overflow-y-auto',
          unbounded.variable,
          poppins.variable,
          unbounded.className
        )}
      >
        <LenisProvider root>
          <YandexMapProvider apiUrl={api.yMapsApiUrl}>
            <SplashScreenWrapper>
              <MotionHeader />
              {children}
              <Footer />
            </SplashScreenWrapper>
          </YandexMapProvider>
          <Toaster />
          {/* <MouseFollower /> */}
          <ScreenIndicator />
        </LenisProvider>
      </body>
    </html>
  );
}
