import type { Config } from 'tailwindcss';

import tailwindcssAnimate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './mdx-components.tsx'
  ],
  darkMode: ['class'],
  plugins: [tailwindcssAnimate],
  prefix: '',
  safelist: [
    '!text-[length:inherit]',
    '!font-normal',
    '-inset-x-2',
    'md:left-0',
    'md:right-auto',
    'text-2xs',
    'md:text-xs',
    'md:mb-5',
    'gap-x-1',
    'mb-[2em]',
    'mb-7',
    '[&_+_h2]:mt-[2.5em]',
    'mb-24',
    'mb-20',
    'md:rounded-sm',
    'overflow-hidden',
    'row-start-1',
    'aspect-[5/1]',
    '-mx-container',
    'lg:rounded-sm',
    'lg:mx-[-20%]',
    '2xl:mx-[-50%]',
    'md:mx-[-12.5%]',
    '!leading-normal',
    'text-gradient-first',
    'text-gradient-second',
    'leading-relaxed'
  ],
  theme: {
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'blinker': 'blinker 10s linear infinite alternate',
        'hero-overlay': 'hero-overlay 5s ease-in-out infinite alternate',
        'hero-overlay-mobile':
          'hero-overlay-mobile 5s ease-in-out infinite alternate',
        'mouse-scroll-rect':
          'mouse-scroll-rect 0.6s ease-in-out infinite alternate',
        'mouse-scroll-wheel':
          'mouse-scroll-wheel 0.6s ease-in-out infinite alternate'
      },
      backgroundImage: {
        underline:
          'linear-gradient(currentColor 0 0) var(--p, 0) 100% /var(--d, 0) 3px no-repeat'
      },
      borderRadius: {
        default: 'var(--radius)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)'
      },
      colors: {
        background: 'var(--background)',
        border: 'var(--border)',
        foreground: 'var(--foreground)',
        gradient: {
          first: 'var(--gradient-first)',
          second: 'var(--gradient-second)'
        },
        input: 'var(--input)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        ring: 'var(--ring)'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        unbounded: ['var(--font-unbounded)', ...fontFamily.sans]
      },
      fontSize: {
        '2xs': '13px',
        '3xs': '12px',
        '4xs': '11px',
        '5xs': '10px'
      },
      height: {
        'header': 'var(--header-height)',
        'header-sm': 'var(--header-height-sm)'
      },
      inset: {
        'header': 'var(--header-height)',
        'header-sm': 'var(--header-height-sm)',
        'header-top': 'var(--header-top)',
        'header-top-sm': 'var(--header-top-sm)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'blinker': {
          '0%': { opacity: '1' },
          '47%': { opacity: '1' },

          '47.5%': { opacity: '0' },
          '48%': { opacity: '1' },
          '77%': { opacity: '1' },

          '77.5%': { opacity: '0' },
          '78%': { opacity: '1' },
          '80%': { opacity: '1' },

          '80.5%': { opacity: '0' },
          '81%': { opacity: '1' }
        },
        'hero-overlay': {
          from: { transform: 'translateX(-20vw) rotate(-30deg)' },
          to: { transform: 'translateX(80vw) rotate(-30deg)' }
        },
        'hero-overlay-mobile': {
          from: { transform: 'translateX(-20vw) rotate(-30deg)' },
          to: { transform: 'translateX(180vw) rotate(-30deg)' }
        },
        'mouse-scroll-rect': {
          '50%': { height: '40px', transform: 'translateY(0px)' },
          'from': { height: '40px', transform: 'translateY(0px)' },
          'to': { height: '34px', transform: 'translateY(6px)' }
        },
        'mouse-scroll-wheel': {
          '50%': { transform: 'translateY(0px)' },
          'from': { transform: 'translateY(0px)' },
          'to': { transform: 'translateY(6px)' }
        }
      },
      margin: {
        'container': 'var(--container-padding)',
        'container-lg': 'var(--container-padding-lg)',
        'container-md': 'var(--container-padding-md)',
        'container-sm': 'var(--container-padding-sm)',
        'footer': 'var(--footer-padding)',
        'footer-lg': 'var(--footer-padding-lg)',
        'footer-md': 'var(--footer-padding-md)',
        'footer-sm': 'var(--footer-padding-sm)',
        'header': 'var(--header-height)',
        'header-sm': 'var(--header-height-sm)'
      },
      outlineOffset: {
        3: '3px'
      },
      outlineWidth: {
        3: '3px'
      },
      padding: {
        'container': 'var(--container-padding)',
        'container-lg': 'var(--container-padding-lg)',
        'container-md': 'var(--container-padding-md)',
        'container-sm': 'var(--container-padding-sm)',
        'footer': 'var(--footer-padding)',
        'footer-lg': 'var(--footer-padding-lg)',
        'footer-md': 'var(--footer-padding-md)',
        'footer-sm': 'var(--footer-padding-sm)',
        'header': 'var(--header-height)',
        'header-sm': 'var(--header-height-sm)'
      },
      scale: {
        200: '200%'
      },
      screens: {
        '3xl': '2000px'
      },
      transitionDelay: {
        1500: '1500ms',
        2000: '2000ms',
        800: '800ms'
      },
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms'
      },
      transitionTimingFunction: {
        'back-out': 'cubic-bezier(0.33, 1.53, 0.69, 0.99)'
      }
    },
    screens: {
      '2xl': '1536px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'xl': '1280px',
      'xs': '400px'
    }
  }
} satisfies Config;

export default config;
