import type { Metadata, Viewport } from 'next';

import { Poppins, Unbounded } from 'next/font/google';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import { Footer } from '@/app/_components/footer/footer';
import { Header } from '@/app/_components/header/header';
import { LenisProvider } from '@/app/_components/lenis-provider';
import { MouseFollower } from '@/app/_components/mouse-follower';
import { ScreenIndicator } from '@/app/_components/screen-indicator';
import { SplashScreenWrapper } from '@/app/_components/splash-screen-wrapper';

import './globals.css';

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-unbounded',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.naming,
    template: `%s - ${siteConfig.naming}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['led'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteConfig.url,
    title: siteConfig.naming,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 847,
        height: 443,
        alt: siteConfig.naming,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.naming,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: 'black',
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen w-screen overflow-x-hidden bg-foreground text-foreground antialiased [&[data-scroll-locked]]:!overflow-y-auto',
          unbounded.variable,
          poppins.variable,
          unbounded.className
        )}
      >
        <LenisProvider>
          <SplashScreenWrapper>
            <Header />
            {children}
            <Footer />
          </SplashScreenWrapper>
          <Toaster />
          <MouseFollower />
          <ScreenIndicator />
        </LenisProvider>
      </body>
    </html>
  );
}
